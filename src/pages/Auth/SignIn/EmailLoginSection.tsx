import React from 'react';
import { StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { BaseText } from '@components/common/BaseText';
import { SIGN_IN } from '@pages/Auth/SignIn/consts';
import { FormInput } from '@components/common/forms/FormInput';
import { Button } from '@components/common/buttons/Button';
import { COLORS } from '@constants/Colors';

export const EmailLoginSection = () => {
  const { control, handleSubmit } = useForm();

  const onHandleSubmit = (something: any) => {
    // signin
    console.log('#### something', something);
  };

  return (
    <>
      <BaseText text={SIGN_IN.TITLE} customTextStyle={styles.title} />
      <FormInput
        name="username"
        control={control}
        title={SIGN_IN.USERNAME_TITLE}
        customInputStyle={styles.usernameInput}
        placeholder={SIGN_IN.USERNAME_PLACEHOLDER}
        customTitleStyle={styles.usernameInputTitle}
        rules={{ required: `${SIGN_IN.USERNAME_TITLE} ${SIGN_IN.INPUT_ERROR_TEXT}` }}
      />
      <FormInput
        name="password"
        control={control}
        secureTextEntry={true}
        title={SIGN_IN.PASSWORD_TITLE}
        customInputStyle={styles.passwordInput}
        placeholder={SIGN_IN.PASSWORD_PLACEHOLDER}
        customTitleStyle={styles.passwordInputTitle}
        rules={{ required: `${SIGN_IN.PASSWORD_TITLE} ${SIGN_IN.INPUT_ERROR_TEXT}` }}
      />
      <Button
        btnLabel={SIGN_IN.BUTTON}
        onPress={handleSubmit(onHandleSubmit)}
        customBtnContainerStyle={styles.btnContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 17,
    marginBottom: 20,
    fontSize: 24,
  },
  usernameInput: {
    fontSize: 20,
    borderRadius: 3,
  },
  usernameInputTitle: {
    paddingBottom: 5,
    color: COLORS.INPUT_GREY,
    fontSize: 16,
  },
  passwordInputTitle: {
    marginTop: 22,
    paddingBottom: 5,
    color: COLORS.INPUT_GREY,
    fontSize: 16,
  },
  passwordInput: {
    fontSize: 20,
    borderRadius: 3,
  },
  btnContainer: {
    marginTop: 32,
  },
});
