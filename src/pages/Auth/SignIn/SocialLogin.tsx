import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.facebook}>F</Text>
      <Text style={styles.google}>G</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
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
