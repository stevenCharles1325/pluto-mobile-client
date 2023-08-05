import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {accentColor} from '../../styles/global';
import {DatePickerInput} from 'react-native-paper-dates';

export default function PersonalInformation() {
  return (
    <React.Fragment>
      <View style={{flex: 5, gap: 25}}>
        <TextInput
          label="First name"
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
          label="Middle name"
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
          label="last name"
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
          label="Address"
          dense
          selectionColor={accentColor}
          underlineColor={accentColor}
          placeholderTextColor={accentColor}
          activeUnderlineColor={accentColor}
          contentStyle={{
            backgroundColor: 'black',
          }}
        />
        <DatePickerInput
          value={undefined}
          locale="en"
          label="Birth date"
          // value={inputDate}
          onChange={d => console.log(d)}
          inputMode="start"
          dense
          selectionColor={accentColor}
          underlineColor={accentColor}
          placeholderTextColor={accentColor}
          activeUnderlineColor={accentColor}
          contentStyle={{
            backgroundColor: 'black',
          }}/>
      </View>
    </React.Fragment>
  );
}
