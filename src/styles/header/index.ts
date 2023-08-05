import {headingColor} from '../global';
import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    headingColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerChild: {
    backgroundColor: 'transparent',
    flex: 10,
  },
  headerBox: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  headerLogo: {
    resizeMode: 'cover',
    width: 150,
    height: 50,
  },
});
