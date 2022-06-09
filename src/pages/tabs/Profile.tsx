import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@constants/Colors';
import ProfileHeader from '@components/profileHeader/ProfileHeader';
import { MemberSinceDropDown } from '@components/profileHeader/MemberSinceDropDown';
import { ProfileNavigationBar, ProfileScreenNavigationProp } from '@pages/tabs/Profile/ProfileNavigationBar';

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Profile = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.memberSinceDropDown}>
        <MemberSinceDropDown memberSince={1994} />
      </View>
      <View style={styles.subContainer}>
        <ProfileHeader profileName={'אנה בלום'} memberSince={1994} />
        <ProfileNavigationBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_BLUE,
    justifyContent: 'center',
  },
  memberSinceDropDown: {
    position: 'absolute',
    top: 32,
    zIndex: 100,
    right: 279,
  },
  subContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 0,
    width: '100%',
  }
});

export default Profile;
