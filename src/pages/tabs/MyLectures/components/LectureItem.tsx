import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LectureItemIface, LectureSheet } from '../types';
import { SheetManager } from 'react-native-actions-sheet/dist';

interface Props {
  item: LectureItemIface;
}

export const LectureItem = ({ item }: Props) => {
  const { id, title } = item;
  const sheetId = `${LectureSheet.PANEL}-${id}`;

  const handleLecturePick = () => {
    SheetManager.show(sheetId);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLecturePick}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'right',
  },
});
