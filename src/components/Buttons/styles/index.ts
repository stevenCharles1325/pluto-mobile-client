import {StyleSheet} from 'react-native';
import {accentColor} from '../../../styles/global';

const pbuttonOutlinedStyle = StyleSheet.create({
  contentStyle: {
    borderColor: accentColor,
    flexDirection: 'row-reverse',
  },
  labelStyle: {
    color: accentColor,
  },
  style: {
    borderColor: accentColor,
  },
});

const pbuttonContainedStyle = StyleSheet.create({
  contentStyle: {backgroundColor: accentColor},
  labelStyle: {},
  style: {},
});

const pbuttonTextStyle = StyleSheet.create({
  contentStyle: {},
  labelStyle: {},
  style: {},
});

export {pbuttonOutlinedStyle, pbuttonContainedStyle, pbuttonTextStyle};
