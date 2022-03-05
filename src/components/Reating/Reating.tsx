import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import Logo from '../../constants/starIcon.svg';

export const Reating = () => {
  const [rating, setRating] = useState(0);

  const ColorStar = (index: number) => {
    setRating(index);
  };

  const ALLSTARS = 5;

  const generateIcon = (key: number, color: string) => {
    return (
      <View style={styles.button2}>
        <TouchableOpacity
          onPress={() => {
            return ColorStar(key);
          }}>
          <Logo width={20} height={20} fill={color} />
        </TouchableOpacity>
      </View>
    );
  };

  let starsBody = [];
  for (let i = 0; i < ALLSTARS; i++) {
    if (rating > i) {
      starsBody.push(generateIcon(i, COLORS.BLACK));
    } else {
      starsBody.push(generateIcon(i, COLORS.LIGHT_ORANGE));
    }
  }
  return <View style={styles.button}>{starsBody}</View>;
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
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: COLORS.LIGHT_GREY,
  },
});
