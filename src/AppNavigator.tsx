import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '@app/storeUtils';
import { selectIsAuthenticated } from '@pages/Auth/authSelectors';
import Splash from '@pages/Splash';
import Popup from '@components/popup/Popup';
import { Main } from '@pages/tabs/Main';
import { SignIn } from '@pages/Auth/SignIn';

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  Popup: undefined;
  SignIn: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <RootStack.Navigator>
      {isAuthenticated ? (
        <>
          <RootStack.Group>
            <RootStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <RootStack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: 'transparentModal',
              headerShown: false,
            }}>
            <RootStack.Screen name="Popup" component={Popup} />
          </RootStack.Group>
        </>
      ) : (
        <>
          <RootStack.Screen name="SignIn" component={SignIn} />
        </>
      )}
    </RootStack.Navigator>
  );
};
