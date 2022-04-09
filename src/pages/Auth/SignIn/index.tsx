import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { LanguagePicker } from '@pages/Auth/SignIn/LanguagePicker';
import { AlternativeLoginSection } from '@pages/Auth/SignIn/AlternativeLoginSection';
import { EmailLoginSection } from '@pages/Auth/SignIn/EmailLoginSection';

export const SignIn = () => {
  return (
    <ScrollView style={styles.container}>
      <LanguagePicker />
      <EmailLoginSection />
      <AlternativeLoginSection />
    </ScrollView>
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
