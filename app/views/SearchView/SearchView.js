import React, { Component } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';

import SuggestingSearch from '../../components/SuggestingSearch';

import colors from '../../constants/colors';
import strings from '../../constants/strings';
import styles from './styles';

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      data: [],
      valid: false
    };
  }

  componentWillReceiveProps(nextProps) {
    //when familytree changes map data to the right format for SuggestingSearch
    if(this.props.familytree !== nextProps.familytree) {
      const data = nextProps.familytree.map(p => p.firstName +  " " + p.lastName);
      this.setState({ data });
    }
  }

  //with each change in input this checks if button should be enabled or disabled
  checkValidFamily(text) {
    const familyMember = this.props.familytree.find(p => {
      return (p.firstName + ' ' + p.lastName).toLowerCase() === text.toLowerCase();
    });
    if(familyMember) {
      this.setState({ result: familyMember.id });
    } else {
      this.setState({ result: null });
    }
  }

  //what happens when you press submit on phone keyboard
  search(text) {
    const familyMember = this.props.familytree.find(p => {
      return (p.firstName + ' ' + p.lastName).toLowerCase() === text.toLowerCase();
    });
    if(familyMember) {
      Keyboard.dismiss();
      this.props.setResultMember(this.state.result);
      this.props.navigation.navigate("Result");
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <SuggestingSearch
          data={this.state.data}
          onChangeText={(text) => this.checkValidFamily(text)}
          onSubmitEditing={(text) => this.search(text)}/>

        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: this.state.result ? colors.lapisLazuli : colors.silverLakeBlue}
          ]}
          disabled={!this.state.result}
          onPress={() => {
            Keyboard.dismiss();
            this.props.setResultMember(this.state.result);
            this.props.navigation.navigate("Result");
          }}>
          <Text style={[
            styles.buttonText,
            {color: this.state.result ? colors.lightSteelBlue : colors.darkPastelBlue}
            ]}>
            {strings.search}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SearchView;
