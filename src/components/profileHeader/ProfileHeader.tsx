import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '@constants/Colors';
import { LogoutBtn } from '@components/profileHeader/LogoutBtn';
import { UserAvatar } from '@components/profileHeader/UserAvatar';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  profileName: string;
  memberSince: number;
  image?: string;
}

const HEADER_GRADIENT_COLORS = ['#141622', '#0074BC', '#141622'];

const ProfileHeader = ({ profileName, image }: Props) => {
  return (
    <LinearGradient
      colors={HEADER_GRADIENT_COLORS}
      start={{ x: 0.2, y: 0.2 }}
      end={{ x: 0.8, y: 0.8 }}
      style={styles.container}>
      <View style={styles.subContainer}>
        <UserAvatar profileName={profileName} image={image} />
        <Text style={styles.profileName}>{profileName}</Text>
      </View>
      <View>
        <LogoutBtn btnLabel={'התנתק'} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    justifyContent: 'space-between',
    maxHeight: 136,
    flexDirection: 'row-reverse',
  },
  subContainer: {
    flexDirection: 'row-reverse',
  },
  profileName: {
    marginRight: 15,
    color: COLORS.WHITE,
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 16,
  },
});

export default ProfileHeader;
