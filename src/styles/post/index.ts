import {backgroundColor, headingColor} from '../global';
import {StyleSheet} from 'react-native';

export const postStyle = StyleSheet.create({
  postCard: {
    backgroundColor,
    textColor: headingColor,
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    maxHeight: 600,
    marginBottom: 10,
    paddingVertical: 'auto',
  },
  postDescriptionBoxDivider: {
    marginTop: 10,
    marginBottom: 10,
  },
  postDescriptionBox: {
    backgroundColor: 'transparent',
    textColor: headingColor,
    padding: 10,
    height: 'auto',
    maxHeight: 300,
  },
  postMediaBox: {
    justifyContent: 'center',
    alignItems: 'center',
    imageSize: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textColor: headingColor,
    height: 280,
    maxHeight: 400,
  },
});
