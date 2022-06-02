import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import Logo from '../../constants/starIcon.svg';

type props = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
};
export const Reating = (prop: props) => {
  const { rating, setRating } = prop;
  const ColorStar = (index: number) => {
    setRating(index + 1);
  };

  const ALLSTARS = 5;

  const generateIcon = (key: number, color: string) => {
    return (
      <View style={styles.button2}>
        <TouchableOpacity
          onPress={() => {
            return ColorStar(key);
          }}>
          <Logo width={27} height={27} fill={color} />
        </TouchableOpacity>
      </View>
    );
  };

  let starsBody = [];
  for (let i = 0; i < ALLSTARS; i++) {
    if (rating > i) {
      starsBody.push(generateIcon(i, COLORS.GOld));
    } else {
      starsBody.push(generateIcon(i, COLORS.WHITE));
    }
  }
  return <View style={styles.button}>{starsBody}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 3,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 1,
    elevation: 3,
  },
});
