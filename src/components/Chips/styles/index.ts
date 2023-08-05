import {StyleSheet} from 'react-native';
import {accentColor, textColor} from '../../../styles/global';

export const chipStyle = StyleSheet.create({
  defaultStyle: {
    backgroundColor: textColor,
    color: accentColor,
    imageColor: accentColor,
  },
  textStyle: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
