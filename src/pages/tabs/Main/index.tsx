import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../AppNavigator';
import { TabScreensNames } from '@pages/tabs/Main/types';
import Profile from '../Profile';
import Search from '../Search';
import { MyLectures } from '../MyLectures';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface Props {
  navigation: MainScreenNavigationProp;
}

export type TabNavParamList = {
  [TabScreensNames.PROFILE]: {} | undefined;
  [TabScreensNames.SEARCH]: undefined;
  [TabScreensNames.MY_LECTURES]: undefined;
  [TabScreensNames.POPUP]: undefined;
};

const BottomTabNav = createBottomTabNavigator<TabNavParamList>();

export const Main = ({ navigation }: Props) => {
  return (
    <BottomTabNav.Navigator>
      <BottomTabNav.Screen name={TabScreensNames.PROFILE} component={Profile} initialParams={navigation} />
      <BottomTabNav.Screen name={TabScreensNames.SEARCH} component={Search} />
      <BottomTabNav.Screen name={TabScreensNames.MY_LECTURES} component={MyLectures} />
    </BottomTabNav.Navigator>
  );
};
