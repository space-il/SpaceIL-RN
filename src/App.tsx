import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './pages/Splash';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import { store } from './app/store';

export type RootStackParamList = {
  Splash: {};
  Main: {};
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
