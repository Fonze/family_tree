import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.darkPastelBlue,
    padding: 16
  },
  flexOne: {
    flex: 1
  },
  section: {
    flex: 1,
    flexDirection: 'row'
  },
  lineRow: {
    height: 2,
    flexDirection: 'row'
  },
  line: {
    flex: 1,
    backgroundColor: colors.deepKoamaru
  }
})
