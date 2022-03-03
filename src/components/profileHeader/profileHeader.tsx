import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import UserAvatar from 'react-native-user-avatar';
import { COLORS, HEADER_GRADIENT_COLORS } from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  profileName: string;
  memberSince: number;
  image?: string;
}

const ProfileHeader = ({ profileName, memberSince, image }: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [year, setYear] = useState(memberSince);

  const sinceDropDown = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
      new Array(50),
      (val, index) => currentYear - index,
    );
    const btnText = ` מתנדב/ת מאז ${year}`;

    const setMemberSince = (item: number) => {
      setYear(item);
      setShowDropDown(false);
    };

    return (
      <View>
        <TouchableOpacity
          style={styles.sinceBtn}
          onPress={() => setShowDropDown(true)}>
          <Text style={styles.sinceText}>{btnText}</Text>
        </TouchableOpacity>
        {showDropDown && (
          <View style={styles.sinceDropdownContainer}>
            <FlatList
              style={styles.sinceDropdown}
              data={years}
              renderItem={({ item }) => (
                <TouchableHighlight
                  style={styles.sinceDropdownItem}
                  onPress={() => {
                    setMemberSince(item);
                  }}
                  underlayColor={COLORS.LIGHT_GREY}>
                  <Text style={styles.sinceDropdownText}>{item}</Text>
                </TouchableHighlight>
              )}
              keyExtractor={yearText => `${yearText}`}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={HEADER_GRADIENT_COLORS}
      start={{ x: 0.2, y: 0.2 }}
      end={{ x: 0.8, y: 0.8 }}
      style={styles.container}>
      <View style={styles.avatarContainer}>
        <UserAvatar
          size={88}
          name={profileName}
          bgColor={COLORS.LIGHT_GREY}
          src={image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.profileName}>{profileName}</Text>
        {sinceDropDown()}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    maxHeight: 136,
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
    color: COLORS.WHITE,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 11,
  },
  sinceText: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'right',
    flex: 1,
    justifyContent: 'flex-start',
  },
  sinceBtn: {
    backgroundColor: 'transparent',
    height: 22,
    paddingRight: 6
  },
  sinceDropdown: {},
  sinceDropdownContainer: {
    position: 'absolute',
    top: 22,
    borderRadius: 10,
    maxHeight: 170,
    backgroundColor: COLORS.WHITE,
    width: 160,
    zIndex: 1,
    padding: 10,
  },
  sinceDropdownItem: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sinceDropdownText: {
    color: COLORS.BLACK,
    fontSize: 18,
    lineHeight: 24,
  },
});

export default ProfileHeader;
