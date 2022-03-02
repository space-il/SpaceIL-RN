import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../Main';
import { COLORS } from '../../constants/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchPreferences from './Profile/tabs/SearchPreferences';
import HomeDetails from './Profile/tabs/HomeDetails';
import ProfileHeader from '../../components/profileHeader/profileHeader';

import { Reating } from '../../components/Reating/Reating';
type ProfileScreenNavigationProp = BottomTabNavigationProp<
  TabNavParamList,
  'Profile'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Tab = createMaterialTopTabNavigator();

const Profile = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ProfileHeader profileName={'אנה בלום'} memberSince={'1994'} />

      <ProfileNavigationBar navigation={navigation} />
      <Reating></Reating>
    </View>
  );
};

const ProfileNavigationBar = ({ navigation }: Props) => {
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
      <Tab.Screen
        name="העדפות חיפוש"
        component={SearchPreferences}
        initialParams={navigation}
      />
      <Tab.Screen
        name="פרטי מגורים"
        component={HomeDetails}
        initialParams={navigation}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.LIGHT_BLUE,
    justifyContent: 'center',
  },
  tabBarIndicatorStyle: {
    backgroundColor: COLORS.LIGHT_BLUE,
    height: 4,
  },
  profileHeaderStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});

export default Profile;
