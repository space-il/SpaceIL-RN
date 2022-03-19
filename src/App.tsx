import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import { AppNavigator } from './AppNavigator';
import { navTheme } from '@constants/Colors';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer theme={navTheme}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
