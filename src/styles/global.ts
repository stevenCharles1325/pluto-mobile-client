import {StyleSheet} from 'react-native';

export const accentColor = '#3BDB8F';
export const foregroundColor = '#1D1D1D';
export const backgroundColor = '#000000';

export const textColor = '#F3F2F3';
export const headingColor = '#FFFFFF';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  app: {
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    display: 'flex',
    flex: 1,
  },
  card: {
    backgroundColor: foregroundColor,
    textColor: textColor,
  },
});
