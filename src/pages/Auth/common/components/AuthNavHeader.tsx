import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BaseText } from '@components/common/BaseText';
import { COLORS } from '@constants/Colors';
import { useNavigation } from '@react-navigation/native';

interface Props {
  prevScreenName: string;
}

export const AuthNavHeader = ({ prevScreenName }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={navigation.goBack}>
      <BaseText text={prevScreenName} customTextStyle={styles.screenLabel} />
      <Text style={styles.backArrow}>{'>'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 25,
  },
  backArrow: {
    color: COLORS.BLUE,
    marginLeft: 10,
    fontSize: 18,
  },
  screenLabel: {
    color: COLORS.BLUE,
    textAlign: 'right',
    fontSize: 16,
  },
});
