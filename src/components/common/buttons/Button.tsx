import React from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { COLORS } from '@constants/Colors';

interface Props {
  btnLabel: string;
  onPress: () => void;
  customBtnContainerStyle?: ViewStyle;
  customBtnTitleStyle?: TextStyle;
}

export const Button = (props: Props) => {
  const { btnLabel, onPress } = props;
  const { customBtnContainerStyle, customBtnTitleStyle } = props;
  return (
    <TouchableOpacity style={[styles.container, customBtnContainerStyle]} onPress={onPress}>
      <Text style={[styles.btnLabel, customBtnTitleStyle]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DEEP_BLUE,
  },
  btnLabel: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
  },
});
