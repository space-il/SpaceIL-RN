import { FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { COLORS } from '@constants/Colors';
import React, { useState } from 'react';

interface Props {
  memberSince: number;
}

export const MemberSinceDropDown = ({ memberSince }: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [year, setYear] = useState(memberSince);

  const currentYear = new Date().getFullYear();

  const years = Array.from(new Array(50), (val, index) => currentYear - index);

  const btnText = ` מתנדב/ת מאז ${year}`;

  const setMemberSince = (item: number) => {
    setYear(item);
    setShowDropDown(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.sinceBtn, showDropDown ? styles.sincePressedBtn : styles.sinceUnPressedBtn]}
        onPress={() => setShowDropDown(prev => !prev)}>
        <Text style={styles.sinceText}>{btnText}</Text>
      </TouchableOpacity>

      {showDropDown && (
        <View style={styles.sinceDropdownContainer}>
          <FlatList
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 22,
  },
  sinceText: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 24,
    marginTop: 10,
  },
  sinceBtn: {
    minHeight: 44,
    paddingLeft: 20,
  },
  sinceUnPressedBtn: {
    backgroundColor: 'transparent',
  },
  sincePressedBtn: {
    borderRadius: 11,
    backgroundColor: COLORS.BLUE,
  },
  sinceDropdownContainer: {
    borderRadius: 10,
    maxHeight: 400,
    backgroundColor: COLORS.WHITE,
    width: 165,
    padding: 10,
  },
  sinceDropdownItem: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sinceDropdownText: {
    color: COLORS.BLACK,
    fontSize: 18,
    lineHeight: 24,
  },
});
