import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BasicText } from '@components/common/BasicText';
import { SIGN_IN } from '@pages/Auth/SignIn/consts';
import { Button } from '@components/common/buttons/Button';
import { useNavigation } from '@react-navigation/native';
import { SocialLogin } from '@pages/Auth/SignIn/SocialLogin';
import { StackScreensNames } from '@pages/types';
import { MainScreenNavigationProp } from '@pages/tabs/Main';

export const AlternativeLoginSection = () => {
  const { navigate } = useNavigation<MainScreenNavigationProp>();

  const onForgotPassPress = () => {
    navigate(StackScreensNames.FORGOT_PASS);
  };

  const onSignUpPress = () => {
    navigate(StackScreensNames.SIGN_UP);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.lineStroke} />
        <BasicText text={SIGN_IN.ALTER_TITLE} customTextStyle={styles.title} />
        <View style={styles.lineStroke} />
      </View>
      <SocialLogin />
      <Button
        onPress={onForgotPassPress}
        btnLabel={SIGN_IN.FORGOT_PASS_LABEL}
        customBtnTitleStyle={styles.forgotBtnLabel}
        customBtnContainerStyle={styles.forgotBtnContainer}
      />
      <Button
        onPress={onSignUpPress}
        btnLabel={SIGN_IN.SIGN_UP_LABEL}
        customBtnTitleStyle={styles.signupBtnLabel}
        customBtnContainerStyle={styles.signupBtnContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    color: '#686E74',
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
  lineStroke: {
    height: 1,
    width: '30%',
    backgroundColor: '#C4C4C4',
  },
});
