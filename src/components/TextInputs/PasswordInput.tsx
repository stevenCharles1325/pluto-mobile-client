import React from 'react';
import {TextInput as TextInp} from 'react-native-paper';
import {View} from 'react-native';
import {accentColor} from '../../styles/global';
import TextInputProps from './interfaces';

export default function PasswordInput(props: TextInputProps) {
  const [visible, setVisible] = React.useState(true);

  return (
    <View style={{position: 'relative'}}>
      <TextInp
        label={props.label}
        secureTextEntry={!visible}
        dense={props.dense ?? true}
        selectionColor={props.selectionColor ?? accentColor}
        underlineColor={props.underlineColor ?? accentColor}
        placeholderTextColor={props.placeholderTextColor ?? accentColor}
        activeUnderlineColor={props.activeUnderlineColor ?? accentColor}
        outlineStyle={{backgroundColor: 'black'}}
        contentStyle={
          props.contentStyle ?? {
            backgroundColor: 'black',
          }
        }
        onChangeText={props.onChange}
      />
      <TextInp.Icon
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          zIndex: 1,
          transform: [{translateX: 250}, {translateY: 0}],
        }}
        icon={!visible ? 'eye' : 'eye-off'}
        onPress={() => setVisible(visible => !visible)}
      />
    </View>
  );
}
