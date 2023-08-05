// import React from "react";
import {PropsWithChildren} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {headerStyle} from '../styles/header';

interface HeaderType extends PropsWithChildren {
  hidden: boolean;
}

export default function Header({hidden, children}: HeaderType) {
  return (
    <View style={headerStyle.headerBox}>
      {!hidden ? (
        <View style={headerStyle.main}>
          <View style={{flex: 3}}>
            <Image
              source={require('../assets/images/name-transparent-cropped.png')}
              style={headerStyle.headerLogo}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <IconButton icon="account" size={25} />
            <IconButton icon="bell" size={25} />
          </View>
        </View>
      ) : null}
      <View style={headerStyle.headerChild}>{children}</View>
    </View>
  );
}
