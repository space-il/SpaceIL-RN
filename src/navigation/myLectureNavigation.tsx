import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyLectures } from '@pages/tabs/MyLectures';
import { MyLectureScreensNames } from '@pages/tabs/MyLectures/types';
import Lecture from '@pages/tabs/MyLectures/Lecture';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '@pages/tabs/Main';
import { Text } from 'react-native';

type MyLecturesScreenNavigationProp = BottomTabNavigationProp<TabNavParamList>;

interface Props {
  navigation: MyLecturesScreenNavigationProp;
}

export type myLectureStackParamList = {
  [MyLectureScreensNames.MY_LECTURE]: undefined;
  [MyLectureScreensNames.LECTURE]: {} | undefined;
};

export const myLectureNavigation = createStackNavigator<myLectureStackParamList>();

export const MyLectureNavigation = ({ navigation }: Props) => {
  return (
    <myLectureNavigation.Navigator>
      <myLectureNavigation.Group screenOptions={{ headerShown: false }}>
        <myLectureNavigation.Screen name={MyLectureScreensNames.MY_LECTURE} component={MyLectures} />
      </myLectureNavigation.Group>
      <myLectureNavigation.Group screenOptions={{ headerShown: true }}>
        <myLectureNavigation.Screen
          options={{
            headerTitle: () => <Text>'כאן'</Text>,
          }}
          name={MyLectureScreensNames.LECTURE}
          component={Lecture}
          initialParams={navigation}
        />
      </myLectureNavigation.Group>
    </myLectureNavigation.Navigator>
  );
};
