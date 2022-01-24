import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import Profile from './tabs/Profile';
import Search from './tabs/Search';
import MyLectures from './tabs/MyLectures';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface Props {
  navigation: MainScreenNavigationProp;
}

export type TabNavParamList = {
  Profile: {};
  Search: {};
  MyLectures: {};
};

const BottomTabNav = createBottomTabNavigator<TabNavParamList>();

const Main = ({ navigation }: Props) => {
  return (
    <BottomTabNav.Navigator>
      <BottomTabNav.Screen name="Profile" component={Profile} />
      <BottomTabNav.Screen name="Search" component={Search} />
      <BottomTabNav.Screen name="MyLectures" component={MyLectures} />
    </BottomTabNav.Navigator>
  );
};

export default Main;
