import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
