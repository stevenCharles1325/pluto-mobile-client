import React from 'react';
import {View, Image} from 'react-native';
import LogoNameProps from './interfaces';
import {logoNameStyle} from './styles';

export default function LogoName(props: LogoNameProps) {
  return (
    <View style={props.containerStyle ?? logoNameStyle.container}>
      <Image
        source={require('../../assets/images/name-transparent-cropped.png')}
        style={{
          resizeMode: 'contain',
          width: props.width ?? 200,
        }}
      />
    </View>
  );
}
