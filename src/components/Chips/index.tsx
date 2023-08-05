import {Chip as Chp} from 'react-native-paper';
import LocalChipProps from './interfaces';
import {chipStyle} from './styles';

export default function Chip(props: LocalChipProps) {
  return (
    <Chp
      disabled={props.disabled}
      icon={props.icon}
      onPress={props.onPress}
      style={[
        props.style ?? chipStyle.defaultStyle,
        {width: props.width ?? 200},
      ]}
      textStyle={props.textStyle ?? chipStyle.textStyle}>
      {props.children}
    </Chp>
  );
}
