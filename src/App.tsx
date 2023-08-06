import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {globalStyles} from './styles/global';
import {PaperProvider} from 'react-native-paper';
import {enGB, registerTranslation} from 'react-native-paper-dates';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';
import AuthenticationProvider from './components/AuthenticationProvider';

registerTranslation('en-GB', enGB);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={globalStyles.container}>
          <View style={globalStyles.app}>
            <StatusBar barStyle={'light-content'} />
            <AuthenticationProvider>
              <Navigation />
            </AuthenticationProvider>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
