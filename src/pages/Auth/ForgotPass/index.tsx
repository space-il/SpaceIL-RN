import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ForgotPass = () => {
  return (
    <View style={styles.container}>
      <Text>ForgotPass screen</Text>
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
