import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './pages/Splash';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { SafeAreaView } from 'react-native';

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <RootStack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
