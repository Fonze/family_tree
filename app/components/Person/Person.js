import React from 'react';
import { Text, View } from 'react-native';

import colors from '../../constants/colors';
import styles from './styles';

const Person = (props) => {
  return (
    <View style={styles.body}>
      {/*line going up from the person*/}
      <View style={styles.verticalLineWrap}>
        <View style={styles.flexOne}></View>
        <View style={[styles.line, {borderLeftWidth: props.up ? 2 : 0}]}></View>
      </View>

      <View style={styles.center}>
        {/*line going left and down from the person*/}
        <View style={styles.horizontalLineWrap}>
          <View style={styles.flexOne}></View>
          <View style={[
            styles.line,
            {borderTopWidth: props.left ? 2 : 0, borderLeftWidth: props.left ? 2 : 0}
          ]}></View>
        </View>

        {/*person name*/}
        <View style={[
          styles.textWrap,
          {backgroundColor: props.active ? colors.lapisLazuli : colors.lightSteelBlue}
          ]}>
          <Text style={[
            styles.text,
            {color: props.active ? colors.lightSteelBlue : colors.deepKoamaru}
            ]}>
            {props.firstName}
          </Text>
          <Text style={[
            styles.text,
            {color: props.active ? colors.lightSteelBlue : colors.deepKoamaru}
            ]}>
            {props.lastName}
          </Text>
        </View>

        {/*line going right from the person*/}
        <View style={styles.horizontalLineWrap}>
          <View style={styles.flexOne}></View>
          <View style={[styles.line, {borderTopWidth: props.right ? 2 : 0}]}></View>
        </View>
      </View>

      {/*line going down from the person*/}
      <View style={styles.verticalLineWrap}>
        <View style={[styles.line, {borderLeftWidth: props.left ? 2 : 0}]}></View>
        <View style={styles.flexOne}></View>
      </View>
    </View>
  );
}

export default Person;
