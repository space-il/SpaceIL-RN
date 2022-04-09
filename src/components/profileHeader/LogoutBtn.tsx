import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { authManager } from '@services/auth/auth.api';
import { BaseText } from '@components/common/BaseText';
import { COLORS } from '@constants/Colors';
import { AuthState } from '@services/auth/types';
import { useAppDispatch } from '@app/storeUtils';
import { setSignOutAuthInfo } from '@pages/Auth/authSlice';

interface Props {
  btnLabel: string;
}

export const LogoutBtn = ({ btnLabel }: Props) => {
  const dispatch = useAppDispatch();

  const handleSignOut = async (): Promise<void> => {
    const res = await authManager.signOut();
    res === AuthState.SIGNOUT_SUCCESS && dispatch(setSignOutAuthInfo());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleSignOut}>
      <BaseText text={btnLabel} customTextStyle={styles.label} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
  },
  label: {
    color: COLORS.WHITE,
    fontSize: 16,
  },
});
