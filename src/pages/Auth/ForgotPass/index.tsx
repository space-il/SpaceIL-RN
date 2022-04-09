import React from 'react';
import { View, StyleSheet } from 'react-native';
import { EmailPasswordUpdateSection } from '@pages/Auth/ForgotPass/EmailPasswordUpdateSection';

export const ForgotPass = () => {
  return (
    <View style={styles.container}>
      <EmailPasswordUpdateSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
});
