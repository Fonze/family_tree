import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Person from '../../components/Person';

import colors from '../../constants/colors';
import styles from './styles';

//shows closest familytree to the given member with lines showing their relationships
class ResultView extends Component {
  constructor(props) {
    super(props);

    //finding parents, grandparents, siblings, significant other and children of the family
    //member. Ignores one step mom case found in the data.
    const you = this.props.familytree[this.props.resultMember - 1];

    const mother = you.mother ? this.props.familytree[you.mother - 1] : null;
    const father = you.father ? this.props.familytree[you.father - 1] : null;

    if(mother) {
      const motherMother = mother.mother ? this.props.familytree[mother.mother - 1] : null;
      const motherFather = mother.father ? this.props.familytree[mother.father - 1] : null;
      if(motherMother) {
        this.motherMother = (
          <Person
            key={'mm'}
            firstName={motherMother.firstName}
            lastName={motherMother.lastName}
            right={motherFather ? true : false}/>
        );
      }

      if(motherFather) {
        this.motherFather = (
          <Person
            key={'mf'}
            firstName={motherFather.firstName}
            lastName={motherFather.lastName}
            left={motherMother ? true : false}/>
        );
      }

      this.mother = (
        <Person
          key={'mom'}
          firstName={mother.firstName}
          lastName={mother.lastName}
          up={motherMother || motherFather}
          right={father ? true : false}/>
      );
    }

    if(father) {
      const fatherMother = father.mother ? this.props.familytree[father.mother - 1] : null;
      const fatherFather = father.father ? this.props.familytree[father.father - 1] : null;

      if(fatherMother) {
        this.fatherMother = (
          <Person
            key={'fm'}
            firstName={fatherMother.firstName}
            lastName={fatherMother.lastName}
            right={fatherFather ? true : false}/>
        );
      }

      if(fatherFather) {
        this.fatherFather = (
          <Person
            key={'ff'}
            firstName={fatherFather.firstName}
            lastName={fatherFather.lastName}
            left={fatherMother ? true : false}/>
        );
      }

      this.father = (
        <Person
          key={'dad'}
          firstName={father.firstName}
          lastName={father.lastName}
          up={fatherMother || fatherMother}
          left={mother ? true : false}/>
      );
    }

    if(mother && father) {
      const siblings = this.props.familytree.filter(p => (p.father === you.father
        || p.mother === you.mother) && p.id !== you.id)

      if(siblings && siblings.length > 0) {

        this.siblings = siblings.map((s, i) => (
            <Person
              key={'sib-' + i}
              firstName={s.firstName}
              lastName={s.lastName}
              up={true}/>
          )
        );
      }
    }

    const children = this.props.familytree.filter((p, i) => {
      return p.mother === you.id || p.father === you.id;
    });

    if(children && children.length > 0) {
      const significant = this.props.familytree[
        children[0].mother === you.id ? children[0].father - 1 : children[0].mother - 1
      ];

      this.significant = (
        <Person
          key={'sign'}
          firstName={significant.firstName}
          lastName={significant.lastName}
          left={true}/>
      );

      this.children = children.map((c, i) =>
        <Person
          key={'child-' + i}
          firstName={c.firstName}
          lastName={c.lastName}
          up={true}/>
      );
    }

    this.you = (
      <Person
        key={'you'}
        firstName={you.firstName}
        lastName={you.lastName}
        up={mother || father}
        right={this.significant ? true : false}
        active={true}/>
    );
    //finding family members ends here
  }

  render() {
    //figuring out how many people there are on the "you" row and children row to calculate
    //width for horizontal lines
    let youRowWidth = this.siblings ? this.siblings.length + 1 : 1;
    youRowWidth = this.significant ? youRowWidth + 1 : youRowWidth;
    const childRowWidth = this.children ? this.children.length + 2 >= youRowWidth
      ? this.children.length : youRowWidth - 2 : 0;

    return (
      <View style={styles.body}>
        {/*grandparents put to two sections for father's parents and mother's parents*/}
        <View style={[styles.section, {display: this.motherMother
          || this.motherFather
          || this.fatherMother
          || this.fatherFather ? 'flex' : 'none'}]}>
          <View style={styles.section}>
            {this.motherMother}
            {this.motherFather}
          </View>
          <View style={styles.section}>
            {this.fatherMother}
            {this.fatherFather}
          </View>
        </View>

        {/*parents section*/}
        <View style={[styles.section, {display: this.mother || this.father ? 'flex' : 'none'}]}>
          {this.mother}
          {this.father}
        </View>

        {/*line between "you" section and parents section calculated to be the right width*/}
        <View style={[styles.lineRow, {
          display: this.mother || this.father ? 'flex' : 'none',
          width: youRowWidth > 1 ? (100 * ((youRowWidth - 1) / youRowWidth) + '%') : 0
          }]}>
          <View style={styles.line}></View>
          <View style={[
            styles.flexOne,
            {backgroundColor: this.siblings ? colors.deepKoamaru : 'transparent'}
            ]}></View>
        </View>

        {/*"you" row, includes the result member their significant other and siblings*/}
        <View style={styles.section}>
          {this.you}
          {this.significant}
          {this.siblings}
        </View>

        {/*line between "you" section and children section calculated to be the right width*/}
        <View style={[styles.lineRow, {
          display: this.children && this.children.length > 0 ? 'flex' : 'none',
          width: childRowWidth > 0 ? (100 * ((childRowWidth - 1) / childRowWidth) + '%') : 0
          }]}>
          <View style={styles.line}></View>
          <View style={[
            styles.flexOne,
            {backgroundColor: this.children && this.children.length > 1
              ? colors.deepKoamaru : 'transparent'}
            ]}></View>
        </View>

        {/*children section*/}
        <View style={[
          styles.section,
          {display: this.children && this.children.length > 0 ? 'flex' : 'none'}
          ]}>
          {this.children}
        </View>
      </View>
    );
  }
}

export default ResultView;
