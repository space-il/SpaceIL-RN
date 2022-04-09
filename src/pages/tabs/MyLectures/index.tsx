import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { COLORS } from '@constants/Colors';
import FiltersBubbles from '@components/filtersBubbles/FiltersBubbles';
import { filtersDataMock } from '@components/filtersBubbles/FiltersData.mock';
import { LecturesList } from './components/LecturesList';
import { LectureItemIface } from './types';
import { TabNavParamList } from '../Main';

type MyLecturesScreenNavigationProp = BottomTabNavigationProp<TabNavParamList>;

interface Props {
  navigation: MyLecturesScreenNavigationProp;
}

const lecturesDummyData: LectureItemIface[] = [{ id: 'lc-1', title: 'הרצאה 1' }];

export const MyLectures = ({}: Props) => {
  return (
    <View style={styles.container}>
      <FiltersBubbles data={filtersDataMock} />
      <LecturesList lectures={lecturesDummyData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_ORANGE,
  },
});
