import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    paddingHorizontal: 16
  },
  suggestionArea: {
    width: '100%',
    position: 'absolute',
    top: 47,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderTopColor: colors.lightGrey,
    borderWidth: 1,
    zIndex: 5,
    maxHeight: 123
  },
  suggestion: {
    paddingVertical: 4,
    paddingHorizontal: 16
  },
  suggestionText: {
    fontSize: 12
  },
  noSuggestions: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    color: colors.lightGrey,
    fontStyle: 'italic',
    fontSize: 12
  }
});
