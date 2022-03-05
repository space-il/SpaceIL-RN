import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import Profile from './tabs/Profile';
import Search from './tabs/Search';
import { MyLectures } from './tabs/MyLectures';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface Props {
  navigation: MainScreenNavigationProp;
}

export enum TabScreensNames {
  PROFILE = 'Profile',
  SEARCH = 'Search',
  MY_LECTURES = 'MyLectures',
}

export type TabNavParamList = {
  [TabScreensNames.PROFILE]: {} | undefined;
  [TabScreensNames.SEARCH]: undefined;
  [TabScreensNames.MY_LECTURES]: undefined;
};

const BottomTabNav = createBottomTabNavigator<TabNavParamList>();

const Main = ({ navigation }: Props) => {
  return (
    <BottomTabNav.Navigator>
      <BottomTabNav.Screen name={TabScreensNames.PROFILE} component={Profile} initialParams={navigation} />
      <BottomTabNav.Screen name={TabScreensNames.SEARCH} component={Search} />
      <BottomTabNav.Screen name={TabScreensNames.MY_LECTURES} component={MyLectures} />
    </BottomTabNav.Navigator>
  );
};

export default Main;
