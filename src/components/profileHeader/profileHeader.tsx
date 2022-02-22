import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';

interface Props {
  profileName: string;
  memberSince: string;
  image?: string;
}
const sinceDropDown = (memberSince: string) => {
  return (
    <View>
      <Text style={styles.since}>מתנדב.ת מאז {memberSince}</Text>
    </View>
  );
};

const ProfileHeader = ({ profileName, memberSince, image }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <UserAvatar size={88} name={profileName} bgColor={'#ccc'} src={image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.profileName}>{profileName}</Text>
        {sinceDropDown(memberSince)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    maxHeight: 136,
    backgroundColor: '#141622',
    padding: 22,
  },
  avatarContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    marginRight: 15,
    justifyContent: 'center',
  },
  profileName: {
    color: '#ffff',
    fontSize: 24,
    fontFamily: 'Abraham',
    lineHeight: 32,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  since: {
    color: '#ffff',
    fontSize: 18,
    fontFamily: 'Abraham',
    lineHeight: 24,
  },
});

export default ProfileHeader;
