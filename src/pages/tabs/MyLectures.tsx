import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../../App';
import { COLORS } from '../../constants/Colors';

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
