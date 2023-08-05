import React from 'react';
import {TextInput as TextInp} from 'react-native-paper';
import {accentColor} from '../../styles/global';
import TextInputProps from './interfaces';

export default function TextInput(props: TextInputProps) {
  return (
    <TextInp
      label={props.label}
      dense={props.dense ?? true}
      multiline={props.multiline || false}
      numberOfLines={props.multiline ? 5 : 0}
      selectionColor={props.selectionColor ?? accentColor}
      underlineColor={props.underlineColor ?? accentColor}
      placeholderTextColor={props.placeholderTextColor ?? accentColor}
      activeUnderlineColor={props.activeUnderlineColor ?? accentColor}
      style={props.style}
      contentStyle={
        props.contentStyle ?? {
          backgroundColor: 'black',
        }
      }
      onChangeText={props.onChange}
    />
  );
}
