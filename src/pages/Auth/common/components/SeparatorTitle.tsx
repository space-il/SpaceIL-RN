import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BaseText } from '@components/common/BaseText';
import { SIGN_IN } from '@pages/Auth/SignIn/consts';

interface Props {
  title: string;
}

export const SeparatorTitle = ({ title }: Props) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.lineStroke} />
      <BaseText text={title} customTextStyle={styles.separatorLabel} />
      <View style={styles.lineStroke} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineStroke: {
    height: 1,
    width: '30%',
    backgroundColor: '#C4C4C4',
  },
  separatorLabel: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    color: '#686E74',
  },
});
