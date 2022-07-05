import { COLORS } from '@constants/Colors';
import SearchPreferences from '@pages/tabs/Profile/tabs/SearchPreferences';
import HomeDetails from '@pages/tabs/Profile/tabs/HomeDetails';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '@pages/tabs/Main';
import { TabScreensNames } from '@pages/tabs/Main/types';

export type ProfileScreenNavigationProp = BottomTabNavigationProp<TabNavParamList, TabScreensNames.PROFILE>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Tab = createMaterialTopTabNavigator();

export const ProfileNavigationBar = ({ navigation }: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarActiveTintColor: COLORS.BLACK,
        tabBarInactiveTintColor: COLORS.GRAY,
      }}
      initialRouteName={'פרטי מגורים'}>
      <Tab.Screen name="העדפות חיפוש" component={SearchPreferences} initialParams={navigation} />
      <Tab.Screen name="פרטי מגורים" component={HomeDetails} initialParams={navigation} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIndicatorStyle: {
    backgroundColor: COLORS.LIGHT_BLUE,
    height: 4,
  },
  profileHeaderStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  }
});
