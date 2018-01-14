import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';

import colors from '../../constants/colors';
import strings from '../../constants/strings';
import styles from './styles';

class SuggestingSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      text: ''
    }
  }

  //this method shows the suggestions according to input. Uses suggestion style similar to
  //Spotify: a word in the suggestion has to start with a word written into the search field
  //and each inputted word has to match to some word in the suggestion
  suggest(text) {
    let results;
    if(text.length > 0) {
      const textArr = text.split(' ');
      results = this.props.data.filter(d => {
        let passed = [];
        const dArr = d.split(' ');

        for(let i = 0; i < dArr.length; i++) {
          for(let j = 0; j < textArr.length; j++) {
            if(dArr[i].toLowerCase().startsWith(textArr[j].toLowerCase())) {
              if(!passed.find(p => p === j + 1)) {
                passed[passed.length] = j + 1;
              }
            }
          }
        }

        return passed.length === textArr.length;
      }).map((d, i) =>
        <TouchableHighlight
          key={'person-' + i}
          style={styles.suggestion}
          underlayColor={colors.darkPastelBlue}
          onPress={() => this.pick(d)}>
          <Text style={styles.suggestionText}>
            {d}
          </Text>
        </TouchableHighlight>
      );
      if(results.length < 1) {
        results.push(
          <Text key={'no-person'} style={styles.noSuggestions}>strings.noSuggestions</Text>
        )
      }
    } else {
      results = [];
    }
    this.setState({ results, text });
    this.props.onChangeText(text);
  }

  //when a suggestion is picked
  pick(result) {
    this.setState({ results: [], text: result });
    this.props.onChangeText(result);
  }

  render() {
    return (
      <View>
        <TextInput style={styles.input}
          placeholder={strings.searchPlaceholder}
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.suggest(text)}
          onSubmitEditing={() => this.props.onSubmitEditing(this.state.text)}
          value={this.state.text}/>
        <View style={[
          styles.suggestionArea,
          {display: this.state.results && this.state.results.length > 0 ? 'flex' : 'none'}
          ]}>
          {this.state.results}
        </View>
      </View>
    );
  }
}

export default SuggestingSearch;
