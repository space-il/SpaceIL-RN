import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { EmailSignUpSection } from '@pages/Auth/SignUp/EmailSignUpSection';
import { SeparatorTitle } from '@pages/Auth/common/components/SeparatorTitle';
import { SocialAuth } from '@pages/Auth/common/components/SocialAuth';
import { SIGN_UP } from '@pages/Auth/SignUp/consts';

export const SignUp = () => {
  return (
    <ScrollView style={styles.container}>
      <EmailSignUpSection />
      <SeparatorTitle title={SIGN_UP.ALTER_TITLE} />
      <SocialAuth customContainerStyle={styles.socialLogin} />
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
  socialLogin: {
    marginTop: 25,
  },
});
