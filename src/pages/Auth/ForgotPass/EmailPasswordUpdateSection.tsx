import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseText } from '@components/common/BaseText';
import { FormInput } from '@components/common/forms/FormInput';
import { Button } from '@components/common/buttons/Button';
import { useForm } from 'react-hook-form';
import { COLORS } from '@constants/Colors';
import { FORGOT_PASS } from '@pages/Auth/ForgotPass/consts';
import { authManager } from '@services/auth/auth.api';
import { ResetPasswordObj } from '@pages/Auth/types';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '@pages/tabs/Main';
import { AuthState } from '@services/auth/types';
import { StackScreensNames } from '@pages/types';

export const EmailPasswordUpdateSection = () => {
  const { control, handleSubmit } = useForm<ResetPasswordObj>();
  const { navigate } = useNavigation<MainScreenNavigationProp>();

  const onHandleSubmit = async (submitObj: ResetPasswordObj): Promise<void> => {
    const resetPassRes = await authManager.resetPassword(submitObj.email);
    resetPassRes === AuthState.RESET_PASSWORD_SUCCESS && navigate(StackScreensNames.SIGN_IN);
  };

  return (
    <View style={styles.container}>
      <BaseText text={FORGOT_PASS.TITLE} customTextStyle={styles.title} />
      <FormInput
        name="email"
        control={control}
        title={FORGOT_PASS.EMAIL_TITLE}
        customInputStyle={styles.emailInput}
        placeholder={FORGOT_PASS.EMAIL_PLACEHOLDER}
        customTitleStyle={styles.emailInputTitle}
        rules={{ required: `${FORGOT_PASS.EMAIL_TITLE} ${FORGOT_PASS.INPUT_ERROR_TEXT}` }}
      />
      <Button
        btnLabel={FORGOT_PASS.BUTTON}
        onPress={handleSubmit(onHandleSubmit)}
        customBtnContainerStyle={styles.btnContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
  },
  title: {
    marginTop: 17,
    marginBottom: 20,
    fontSize: 24,
  },
  emailInput: {
    fontSize: 20,
    borderRadius: 3,
  },
  emailInputTitle: {
    paddingBottom: 5,
    color: COLORS.INPUT_GREY,
    fontSize: 16,
  },
  btnContainer: {
    marginTop: 32,
  },
});
