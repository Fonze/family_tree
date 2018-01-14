import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexOne: {
    flex: 1
  },
  verticalLineWrap: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  horizontalLineWrap: {
    flex: 1,
    flexDirection: 'column'
  },
  line: {
    flex: 1,
    borderColor: colors.deepKoamaru
  },
  textWrap: {
    padding: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  }
});
