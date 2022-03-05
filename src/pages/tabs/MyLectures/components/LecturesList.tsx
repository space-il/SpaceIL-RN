import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { LectureItem } from './LectureItem';
import { LectureItemIface, LecturePanelItem } from '../types';
import { LecturePanelSheet } from './LecturesActionSheets/LecturePanelSheet';
import { TabScreensNames } from '@pages/Main';

const panelItems: LecturePanelItem[] = [
  { id: '0', screenToNavigate: TabScreensNames.PROFILE, text: 'פרטי הרצאה' },
  { id: '1', screenToNavigate: TabScreensNames.SEARCH, text: 'עדכון תאריך' },
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
