import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import {globalStyles} from './styles/global';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView style={globalStyles.container}>
        <View style={globalStyles.app}>
          <StatusBar barStyle={'light-content'} />
          <Header>
            <Home />
          </Header>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
