import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  customContainerStyle?: ViewStyle;
}

export const SocialAuth = ({ customContainerStyle = {} }: Props) => {
  return (
    <View style={[styles.container, customContainerStyle]}>
      <Text style={styles.facebook}>F</Text>
      <Text style={styles.google}>G</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  facebook: {
    backgroundColor: 'lightgrey',
    width: 60,
    color: 'blue',
    fontSize: 50,
    textAlign: 'center',
    marginRight: 40,
  },
  google: {
    backgroundColor: 'lightgrey',
    width: 60,
    color: 'red',
    fontSize: 50,
    textAlign: 'center',
  },
});
