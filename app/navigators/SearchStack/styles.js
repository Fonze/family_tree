import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  flexOne: {
    flex: 1
  },
  modalBackDrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  loadingArea: {
    width: 320,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  loadingText: {
    textAlign: 'center'
  }
});
