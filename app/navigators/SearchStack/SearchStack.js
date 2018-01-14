import React from 'react';
import { StackNavigator } from 'react-navigation';

import ResultView from '../../views/ResultView';
import SearchView from '../../views/SearchView';

import colors from '../../constants/colors';
import strings from '../../constants/strings';

const SearchStack = StackNavigator({
  Search: {
    screen: SearchView,
    navigationOptions: {
      headerTitle: strings.headers.search,
      headerStyle: {
        backgroundColor: colors.deepKoamaru
      },
      headerTitleStyle: {
        color: colors.lightSteelBlue
      }
    }
  },
  Result: {
    screen: ResultView,
    navigationOptions: {
      headerTitle: strings.headers.result,
      headerStyle: {
        backgroundColor: colors.deepKoamaru
      },
      headerTitleStyle: {
        color: colors.lightSteelBlue
      },
      headerTintColor: colors.lightSteelBlue
    }
  }
});

export default SearchStack;
