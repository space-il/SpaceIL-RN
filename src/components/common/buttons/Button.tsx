import React from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { COLORS } from '@constants/Colors';

interface Props {
  btnLabel: string;
  onPress: () => void;
  customBtnContainerStyle?: ViewStyle;
  customBtnLabelStyle?: TextStyle;
  secondaryBtn?: boolean;
}

export const Button = (props: Props) => {
  const { btnLabel, onPress, secondaryBtn } = props;
  const { customBtnContainerStyle, customBtnLabelStyle } = props;
  return (
    <TouchableOpacity
      style={[secondaryBtn ? styles.containerSecondary : styles.container, customBtnContainerStyle]}
      onPress={onPress}>
      <Text style={[secondaryBtn ? styles.btnLabelSecondary : styles.btnLabel, customBtnLabelStyle]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DEEP_BLUE,
  },
  btnLabel: {
    color: COLORS.WHITE,
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
  },
  containerSecondary: {
    backgroundColor: COLORS.WHITE,
  },
  btnLabelSecondary: {
    color: COLORS.DEEP_BLUE,
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
  },
});
