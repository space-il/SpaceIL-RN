import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import { AppNavigator } from '@navigation/AppNavigator';
import { appTheme } from '@constants/Colors';
import { ErrorModal } from '@components/errorModal/ErrorModal';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer theme={appTheme}>
          <AppNavigator />
          <ErrorModal />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App; //
