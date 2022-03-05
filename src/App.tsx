import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './pages/Splash';
import { Main } from '@pages/tabs/Main';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Popup from './components/popup/Popup';

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  Popup: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootStack.Navigator>
            {/* Index App Flow */}
            <RootStack.Group>
              <RootStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <RootStack.Screen name="Main" component={Main} options={{ headerShown: false }} />
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
      </SafeAreaView>
    </Provider>
  );
};

export default App;
