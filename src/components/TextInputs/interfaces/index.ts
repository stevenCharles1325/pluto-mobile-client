import {StyleProp, TextStyle} from 'react-native/types';

export default interface TextInputProps {
  label: string;
  dense?: boolean;
  multiline?: boolean;
  selectionColor?: string;
  underlineColor?: string;
  placeholderTextColor?: string;
  activeUnderlineColor?: string;
  contentStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  onChange?: (value: string) => void;
}
