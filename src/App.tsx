import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './pages/Splash';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Popup from './components/popup/Popup';

export type RootStackParamList = {
  Splash: {};
  Main: {};
  Popup: {};
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          {/* Main App Flow */}
          <RootStack.Group>
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
          </RootStack.Group>

          {/* Modals */}
          <RootStack.Group
            screenOptions={{
              presentation: 'transparentModal',
              headerShown: false,
            }}>
            <RootStack.Screen name="Popup" component={Popup} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
