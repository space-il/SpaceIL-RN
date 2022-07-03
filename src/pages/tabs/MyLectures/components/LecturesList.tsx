import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { LectureItem } from './LectureItem';
import { TabScreensNames } from '@pages/tabs/Main/types';
import { LectureItemIface, LecturePanelItem, MyLectureScreensNames } from "../types";
import { LecturePanelSheet } from './LecturesActionSheets/LecturePanelSheet';

const panelItems: LecturePanelItem[] = [
  { id: '0', screenToNavigate: MyLectureScreensNames.LECTURE, text: 'פרטי הרצאה' },
  { id: '1', screenToNavigate: MyLectureScreensNames.MY_LECTURE, text: 'עדכון תאריך' },
];

interface Props {
  lectures: LectureItemIface[];
}

export const LecturesList = ({ lectures }: Props) => {
  const renderItem = ({ item }: { item: LectureItemIface }) => {
    const { id, title } = item;

    return (
      <>
        <LectureItem item={item} />
        <LecturePanelSheet lectureId={id} headerTitle={title} panelItems={panelItems} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={lectures} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'white',
  },
});
