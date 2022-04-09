import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '@constants/Colors';

export const LanguagePicker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>עברית</Text>
      <Image style={styles.flagImg} source={require('@assets/png/israelFlag.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.DEEP_BLUE,
    paddingRight: 10,
    fontSize: 16,
  },
  flagImg: {
    width: 18,
    height: 14,
  },
});
