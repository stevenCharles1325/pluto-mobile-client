// import React from "react";
import {PropsWithChildren} from 'react';
import {Image, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {headerStyle} from '../styles/header';

export default function Header({children}: PropsWithChildren) {
  return (
    <View style={headerStyle.headerBox}>
      <View style={headerStyle.main}>
        <View style={{ flex: 3 }}>
          <Image
            source={require('../assets/images/name-transparent-cropped.png')}
            style={headerStyle.headerLogo}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <IconButton icon="account" size={25} />
          <IconButton icon="bell" size={25} />
        </View>
      </View>
      <View style={headerStyle.headerChild}>{children}</View>
    </View>
  );
}
