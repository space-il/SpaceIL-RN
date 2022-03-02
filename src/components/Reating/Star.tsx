import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import Logo from '../../constants/starIcon.svg';

interface Props {
  OnPress: any;
  index: number;
}

export const Star = ({ OnPress, index }: Props) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={OnPress(index)}>
        <Logo width={20} height={20} fill={'orange'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREEN,
    justifyContent: 'center',
    width: 100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: COLORS.LIGHT_GREY,
  },
});
