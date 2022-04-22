import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SIGN_IN } from '@pages/Auth/SignIn/consts';
import { Button } from '@components/common/buttons/Button';
import { useNavigation } from '@react-navigation/native';
import { SocialAuth } from '@pages/Auth/common/components/SocialAuth';
import { AuthStackScreensNames } from '@pages/types';
import { SeparatorTitle } from '@pages/Auth/common/components/SeparatorTitle';
import { AuthScreenNavigationProp } from '@navigation/AuthNavigator';

export const AlternativeLoginSection = () => {
  const { navigate } = useNavigation<AuthScreenNavigationProp>();

  const onForgotPassPress = () => {
    navigate(AuthStackScreensNames.FORGOT_PASS);
  };

  const onSignUpPress = () => {
    navigate(AuthStackScreensNames.SIGN_UP);
  };

  return (
    <View style={styles.container}>
      <SeparatorTitle title={SIGN_IN.ALTER_TITLE} />
      <SocialAuth customContainerStyle={styles.socialLogin} />
      <Button
        onPress={onForgotPassPress}
        btnLabel={SIGN_IN.FORGOT_PASS_LABEL}
        customBtnLabelStyle={styles.forgotBtnLabel}
        customBtnContainerStyle={styles.forgotBtnContainer}
      />
      <Button
        onPress={onSignUpPress}
        btnLabel={SIGN_IN.SIGN_UP_LABEL}
        customBtnLabelStyle={styles.signupBtnLabel}
        customBtnContainerStyle={styles.signupBtnContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  forgotBtnContainer: {
    marginTop: 32,
    backgroundColor: 'white',
  },
  forgotBtnLabel: {
    color: 'blue',
    fontSize: 16,
    paddingVertical: 0,
  },
  signupBtnContainer: {
    backgroundColor: 'white',
    marginTop: 32,
  },
  signupBtnLabel: {
    color: 'grey',
    fontSize: 16,
    paddingVertical: 0,
  },
  socialLogin: {
    marginTop: 50,
  },
});
