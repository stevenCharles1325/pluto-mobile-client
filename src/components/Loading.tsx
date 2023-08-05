import LottieView from 'lottie-react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <LottieView
        source={require('../assets/animations/music.json')}
        style={{aspectRatio: 1}}
        autoPlay
        loop
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: 16,
            marginTop: 100,
          }}>
          Loading...
        </Text>
      </View>
    </View>
  );
}
