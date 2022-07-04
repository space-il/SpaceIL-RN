import React from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { COLORS } from '@constants/Colors';
import { BaseText } from '@components/common/BaseText';

interface Props {
  btnLabel: string;
  onPress: () => void;
  customBtnContainerStyle?: ViewStyle;
  customBtnLabelStyle?: TextStyle;
  secondaryBtn?: boolean;
  isLoading?: boolean;
  customLoaderStyle?: ViewStyle;
  errMsg?: string;
}

export const Button = (props: Props) => {
  const { btnLabel, onPress, secondaryBtn, isLoading, errMsg } = props;
  const { customBtnContainerStyle, customBtnLabelStyle, customLoaderStyle } = props;
  return (
    <>
      {errMsg ? <BaseText text={errMsg} customTextStyle={styles.errMsg} /> : null}
      <TouchableOpacity
        style={[secondaryBtn ? styles.secondaryBtnContainer : styles.btnContainer, customBtnContainerStyle]}
        onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator style={[styles.loaderStyle, customLoaderStyle]} color={COLORS.WHITE} />
        ) : (
          <Text style={[secondaryBtn ? styles.btnLabelSecondary : styles.btnLabel, customBtnLabelStyle]}>
            {btnLabel}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.DEEP_BLUE,
  },
  btnLabel: {
    color: COLORS.WHITE,
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
  },
  secondaryBtnContainer: {
    backgroundColor: COLORS.WHITE,
  },
  btnLabelSecondary: {
    color: COLORS.DEEP_BLUE,
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
  },
  loaderStyle: {
    paddingVertical: 14,
  },
  errMsg: {
    marginTop: 25,
    textAlign: 'center',
    color: COLORS.ERROR_TEXT,
  },
});
