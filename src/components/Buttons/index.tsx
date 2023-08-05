import {Button} from 'react-native-paper';
import {accentColor} from '../../styles/global';
import PButtonProps from './interfaces';
import {
  pbuttonContainedStyle,
  pbuttonOutlinedStyle,
  pbuttonTextStyle,
} from './styles';

export default function PButton(props: PButtonProps) {
  const mode = props.mode ?? 'outlined';
  const icon = props.leftIcon ?? props.rightIcon;
  const style = {
    contained: pbuttonContainedStyle,
    outlined: pbuttonOutlinedStyle,
    text: pbuttonTextStyle,
  };

  const textColor = {
    contained: 'black',
    outlined: accentColor,
    text: accentColor,
  };

  return (
    <Button
      onPress={props.onPress}
      disabled={props.disabled}
      mode={props.mode}
      icon={icon}
      compact={props.compact || false}
      accessibilityLabel={props.label}
      contentStyle={props.contentStyle ?? [
          style[mode].contentStyle,
          {flexDirection: props.rightIcon ? 'row-reverse' : 'row'},
          {width: props.width ?? 'auto', height: props.height ?? 'auto'},
      ]}
      textColor={props.textColor ?? textColor[mode]}
      labelStyle={props.labelStyle ?? style[mode].labelStyle}
      style={props.style ?? style[mode].style}>
      {props.label}
    </Button>
  );
}
