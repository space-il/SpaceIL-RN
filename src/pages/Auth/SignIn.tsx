import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
  },
});
