import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { AuthStackScreensNames } from '@pages/types';
import { AuthNavHeader } from '@pages/Auth/common/components/AuthNavHeader';
import { SignIn } from '@pages/Auth/SignIn';
import { SignUp } from '@pages/Auth/SignUp';
import { ForgotPass } from '@pages/Auth/ForgotPass';

export type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

export type AuthStackParamList = {
  [AuthStackScreensNames.SIGN_IN]: undefined;
  [AuthStackScreensNames.SIGN_UP]: undefined;
  [AuthStackScreensNames.FORGOT_PASS]: undefined;
};

export const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Group
        screenOptions={{
          header: () => <AuthNavHeader prevScreenName="כניסה לחשבון" />,
        }}>
        <AuthStack.Group screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name={AuthStackScreensNames.SIGN_IN} component={SignIn} />
        </AuthStack.Group>
        <AuthStack.Screen name={AuthStackScreensNames.SIGN_UP} component={SignUp} />
        <AuthStack.Screen name={AuthStackScreensNames.FORGOT_PASS} component={ForgotPass} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};
