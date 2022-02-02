import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../Main';
import { COLORS } from '../../constants/Colors';
import FiltersBubbles from '../../components/filtersBubbles/FiltersBubbles';
import { filtersDataMock } from '../../components/filtersBubbles/FiltersData.mock';

type MyLecturesScreenNavigationProp = BottomTabNavigationProp<
  TabNavParamList,
  'MyLectures'
>;

interface Props {
  navigation: MyLecturesScreenNavigationProp;
}

const MyLectures = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <FiltersBubbles data={filtersDataMock} />
      <Text>MY LECTURES</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.LIGHT_ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyLectures;
