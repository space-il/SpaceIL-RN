import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '@constants/Colors';
import React from 'react';

interface Props {
  profileName: string;
  image?: string;
}

export const UserAvatar = ({ profileName, image }: Props) => {
  const profileChars = profileName.split(/\s/).reduce((response, word) => response + word.slice(0, 1), '');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ profileChars }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_GREY,
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderColor: COLORS.WHITE,
    borderWidth: 3,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
