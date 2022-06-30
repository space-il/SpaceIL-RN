import React from 'react';
import { StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { BaseText } from '@components/common/BaseText';
import { FormInput } from '@components/common/forms/FormInput';
import { Button } from '@components/common/buttons/Button';
import { COLORS } from '@constants/Colors';
import { SIGN_UP } from '@pages/Auth/SignUp/consts';
import { EmailSignUpObj } from '@pages/Auth/types';
import { authManager } from '@services/auth/auth.api';
import { useAppDispatch } from '@app/storeUtils';
import { setAuthInfo } from '../authSlice';
import { AuthState } from '@services/auth/types';

export const EmailSignUpSection = () => {
  const { control, handleSubmit } = useForm<EmailSignUpObj>();
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (submitObj: EmailSignUpObj): Promise<void> => {
    const userInfo = { displayName: `${submitObj.firstName} ${submitObj.lastName}` };
    const authRes = await authManager.emailSignUp(submitObj.email, submitObj.password, userInfo);

    authRes.authState === AuthState.EMAIL_SIGNUP_SUCCESS && dispatch(setAuthInfo(authRes.res));
  };

  return (
    <>
      <BaseText text={SIGN_UP.TITLE} customTextStyle={styles.title} />
      <FormInput
        name="firstName"
        control={control}
        title={SIGN_UP.FIRST_NAME_TITLE}
        customInputStyle={styles.inputContainer}
        placeholder={SIGN_UP.FIRST_NAME_PLACEHOLDER}
        customTitleStyle={styles.firstNameInputTitle}
        rules={{ required: `${SIGN_UP.FIRST_NAME_TITLE} ${SIGN_UP.INPUT_ERROR_TEXT}` }}
      />
      <FormInput
        name="lastName"
        control={control}
        title={SIGN_UP.LAST_NAME_TITLE}
        customInputStyle={styles.inputContainer}
        placeholder={SIGN_UP.LAST_NAME_PLACEHOLDER}
        customTitleStyle={styles.lastNameInputTitle}
        rules={{ required: `${SIGN_UP.LAST_NAME_TITLE} ${SIGN_UP.INPUT_ERROR_TEXT}` }}
      />
      <FormInput
        name="email"
        control={control}
        title={SIGN_UP.USERNAME_TITLE}
        customInputStyle={styles.inputContainer}
        placeholder={SIGN_UP.USERNAME_PLACEHOLDER}
        customTitleStyle={styles.usernameInputTitle}
        rules={{ required: `${SIGN_UP.USERNAME_TITLE} ${SIGN_UP.INPUT_ERROR_TEXT}` }}
      />
      <FormInput
        name="password"
        control={control}
        secureTextEntry={true}
        title={SIGN_UP.PASSWORD_TITLE}
        customInputStyle={styles.inputContainer}
        placeholder={SIGN_UP.PASSWORD_PLACEHOLDER}
        customTitleStyle={styles.passwordInputTitle}
        rules={{ required: `${SIGN_UP.PASSWORD_TITLE} ${SIGN_UP.INPUT_ERROR_TEXT}` }}
      />
      <Button
        btnLabel={SIGN_UP.BUTTON}
        onPress={handleSubmit(onHandleSubmit)}
        customBtnContainerStyle={styles.btnContainer}
      />
    </>
  );
};

const basicInputTitleStyle = {
  paddingBottom: 5,
  color: COLORS.INPUT_GREY,
  fontSize: 16,
  marginTop: 22,
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 24,
  },
  inputContainer: {
    fontSize: 20,
    borderRadius: 3,
  },
  firstNameInputTitle: {
    ...basicInputTitleStyle,
    marginTop: 0,
  },
  lastNameInputTitle: {
    ...basicInputTitleStyle,
  },
  usernameInputTitle: {
    ...basicInputTitleStyle,
  },
  passwordInputTitle: {
    ...basicInputTitleStyle,
  },
  btnContainer: {
    marginTop: 32,
    marginBottom: 40,
  },
});
