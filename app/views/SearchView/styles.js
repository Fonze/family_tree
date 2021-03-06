import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  flexOne: {
    flex: 1
  },
  body: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.darkPastelBlue
  },
  button: {
    width: '100%',
    height: 48,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
