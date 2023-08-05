// import React from "react";
import {View} from 'react-native';
import PButton from '../../components/Buttons';
import TextInput from '../../components/TextInputs/TextInput';
import LogoName from '../../components/Logo/LogoName';
import PasswordInput from '../../components/TextInputs/PasswordInput';

export default function SignIn() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 50,
        paddingTop: 200,
        gap: 20,
      }}>
      <LogoName />
      <View style={{flex: 5, gap: 20}}>
        <TextInput label="Username" />
        <PasswordInput label="Password"/>
        <View>
          <PButton label="Sign In" mode="contained"/>
          <PButton label="Sign Up" mode="text" />
          <View>
            <PButton
              label="Forgot password?"
              mode="text"
              textColor="rgba(255, 255, 255, 0.4)"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
