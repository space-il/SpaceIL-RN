import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useAppDispatch, useAppSelector } from '@app/storeUtils';
import { selectIsAuthenticated } from '@pages/Auth/authSelectors';
import Splash from '@pages/Splash';
import Popup from '@components/popup/Popup';
import { Main } from '@pages/tabs/Main';
import { MainStackScreensNames } from '@pages/types';
import { AuthNavigator } from './AuthNavigator';
import {  clearAuthInfo, setAuthInfo } from '@pages/Auth/authSlice';

export type RootStackParamList = {
  [MainStackScreensNames.SPLASH]: undefined;
  [MainStackScreensNames.MAIN]: undefined;
  [MainStackScreensNames.POPUP]: undefined;
  [MainStackScreensNames.AUTH_NAVIGATOR]: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const dispatch = useAppDispatch();

  // Handle user state changes
  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null): void => {
    user ? dispatch(setAuthInfo(user)) : dispatch(clearAuthInfo());
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <RootStack.Navigator>
      {isAuthenticated ? (
        <>
          <RootStack.Group screenOptions={{ headerShown: false }}>
            <RootStack.Screen name={MainStackScreensNames.SPLASH} component={Splash} />
            <RootStack.Screen name={MainStackScreensNames.MAIN} component={Main} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: 'transparentModal',
              headerShown: false,
            }}>
            <RootStack.Screen name={MainStackScreensNames.POPUP} component={Popup} />
          </RootStack.Group>
        </>
      ) : (
        <RootStack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name={MainStackScreensNames.AUTH_NAVIGATOR} component={AuthNavigator} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
