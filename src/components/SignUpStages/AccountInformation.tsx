import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {accentColor} from '../../styles/global';
import React from 'react';

export default function AccountInformation() {
  return (
    <React.Fragment>
      <View style={{flex: 5, gap: 20}}>
        <TextInput
          label="Username"
          dense
          selectionColor={accentColor}
          underlineColor={accentColor}
          placeholderTextColor={accentColor}
          activeUnderlineColor={accentColor}
          contentStyle={{
            backgroundColor: 'black',
          }}
        />
        <TextInput
          label="Password"
          dense
          secureTextEntry
          selectionColor={accentColor}
          underlineColor={accentColor}
          placeholderTextColor={accentColor}
          activeUnderlineColor={accentColor}
          contentStyle={{
            backgroundColor: 'black',
          }}
        />
        <TextInput
          label="Confirm Password"
          secureTextEntry
          selectionColor={accentColor}
          underlineColor={accentColor}
          activeUnderlineColor={accentColor}
          placeholderTextColor={accentColor}
          contentStyle={{
            backgroundColor: 'black',
          }}
        />
      </View>
    </React.Fragment>
  );
}
