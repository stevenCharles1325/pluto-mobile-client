import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Header from './components/Header';
import {globalStyles} from './styles/global';
import {PaperProvider} from 'react-native-paper';
import {enGB, registerTranslation} from 'react-native-paper-dates';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';

registerTranslation('en-GB', enGB);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={globalStyles.container}>
          <View style={globalStyles.app}>
            <StatusBar barStyle={'light-content'} />
            <Header hidden={false}>
              <Home />
            </Header>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
