import {StyleProp, ViewStyle} from 'react-native/types';

export default interface PButtonProps {
  label: string;
  rightIcon?: string;
  leftIcon?: string;
  mode?: 'outlined' | 'contained' | 'text';
  disabled?: boolean;
  compact?: boolean;
  width?: number;
  height?: number;
  textColor?: string;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
