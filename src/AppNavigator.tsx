import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '@app/storeUtils';
import { selectIsAuthenticated } from '@pages/Auth/authSelectors';
import Splash from '@pages/Splash';
import Popup from '@components/popup/Popup';
import { Main } from '@pages/tabs/Main';
import { SignIn } from '@pages/Auth/SignIn';
import { SignUp } from '@pages/Auth/SignUp';
import { ForgotPass } from '@pages/Auth/ForgotPass';
import { StackScreensNames } from '@pages/types';
import { AuthNavHeader } from '@pages/Auth/common/components/AuthNavHeader';

export type RootStackParamList = {
  [StackScreensNames.SPLASH]: undefined;
  [StackScreensNames.MAIN]: undefined;
  [StackScreensNames.POPUP]: undefined;
  [StackScreensNames.SIGN_IN]: undefined;
  [StackScreensNames.SIGN_UP]: undefined;
  [StackScreensNames.FORGOT_PASS]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <RootStack.Navigator>
      {isAuthenticated ? (
        <>
          <RootStack.Group>
            <RootStack.Screen name={StackScreensNames.SPLASH} component={Splash} options={{ headerShown: false }} />
            <RootStack.Screen name={StackScreensNames.MAIN} component={Main} options={{ headerShown: false }} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: 'transparentModal',
              headerShown: false,
            }}>
            <RootStack.Screen name={StackScreensNames.POPUP} component={Popup} />
          </RootStack.Group>
        </>
      ) : (
        <RootStack.Group
          screenOptions={{
            header: () => <AuthNavHeader prevScreenName="כניסה לחשבון" />,
          }}>
          <RootStack.Group screenOptions={{ headerShown: false }}>
            <RootStack.Screen name={StackScreensNames.SIGN_IN} component={SignIn} />
          </RootStack.Group>
          <RootStack.Screen name={StackScreensNames.SIGN_UP} component={SignUp} />
          <RootStack.Screen name={StackScreensNames.FORGOT_PASS} component={ForgotPass} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
