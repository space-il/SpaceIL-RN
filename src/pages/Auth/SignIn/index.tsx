import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LanguagePicker } from '@pages/Auth/SignIn/LanguagePicker';
import { AlternativeLoginSection } from '@pages/Auth/SignIn/AlternativeLoginSection';
import { EmailLoginSection } from '@pages/Auth/SignIn/EmailLoginSection';

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <LanguagePicker />
      <EmailLoginSection />
      <AlternativeLoginSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 30,
    marginHorizontal: 40,
  },
});
