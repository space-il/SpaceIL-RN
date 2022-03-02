import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { Star } from './Star';

interface Props {}

const ColorStar = (index: number) => {};

export const Reating = (props: Props) => {
  return (
    <View style={styles.button}>
      <Star index={1} OnPress={ColorStar} />
      <Star index={2} OnPress={ColorStar} />
      <Star index={3} OnPress={ColorStar} />
      <Star index={4} OnPress={ColorStar} />
      <Star index={5} OnPress={ColorStar} />
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
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: COLORS.LIGHT_GREEN,
  },
});
