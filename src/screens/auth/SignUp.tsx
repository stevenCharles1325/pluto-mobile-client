import React from 'react';
import {View, ScrollView} from 'react-native';
import {textColor} from '../../styles/global';
import SignUpStages from '../../components/SignUpStages';
import LogoName from '../../components/Logo/LogoName';
import PButton from '../../components/Buttons';

export default function SignUp({navigation}) {
  const [position, setPosition] = React.useState(0);
  const isFinished = React.useMemo(() => position === 2, [position]);

  const onStagePress = (pos: number) => setPosition(pos);

  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 50,
      }}>
      <LogoName />
      <View style={{flex: 5, gap: 20}}>
        <SignUpStages position={position} onPress={onStagePress} />
        <View style={{gap: 20}}>
          {!isFinished ? (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <PButton
                disabled={!position}
                label="Previous"
                leftIcon="chevron-left"
                width={120}
                onPress={() => setPosition(position => position - 1)}
              />
              <PButton
                label="Next"
                rightIcon="chevron-right"
                width={120}
                onPress={() => setPosition(position => position + 1)}
              />
            </View>
          ) : (
            <PButton mode="contained" label="Sign-up" />
          )}
          <PButton
            mode="text"
            label="Sign-in"
            textColor={textColor}
            onPress={() => navigation.navigate('Sign-in')}
          />
        </View>
      </View>
    </ScrollView>
  );
}
