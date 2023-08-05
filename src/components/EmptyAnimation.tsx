import LottieView from 'lottie-react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';

export default function EmptyAnimation() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <LottieView
        source={require('../assets/animations/empty2.json')}
        style={{aspectRatio: 1}}
        autoPlay
        loop
      />
      <Text
        style={{
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: 16,
        }}>
        - Empty Feed -
      </Text>
    </View>
  );
}
