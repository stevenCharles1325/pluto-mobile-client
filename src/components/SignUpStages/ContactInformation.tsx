import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {accentColor} from '../../styles/global';
import PhoneInput from 'react-native-phone-number-input';

export default function ContactInformation() {
  return (
    <React.Fragment>
      <View style={{flex: 5, gap: 20}}>
        <TextInput
          label="Email"
          dense
          selectionColor={accentColor}
          underlineColor={accentColor}
          placeholderTextColor={accentColor}
          activeUnderlineColor={accentColor}
          contentStyle={{
            backgroundColor: 'black',
          }}
        />
        <PhoneInput
          containerStyle={{
            backgroundColor: 'black',
          }}
          disableArrowIcon={true}
          codeTextStyle={{color: accentColor}}
          textContainerStyle={{
            backgroundColor: 'black',
            borderBottomColor: accentColor,
            borderBottomWidth: 1,
          }}
          textInputStyle={{color: accentColor}}
          defaultCode="PH"
        />
        {/* <TextInput
            label="Password"
            secureTextEntry
            passwordRules={'hidden'}
            selectionColor={accentColor}
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            placeholderTextColor={accentColor}
            contentStyle={{
              backgroundColor: 'black',
            }}
          /> */}
      </View>
    </React.Fragment>
  );
}
