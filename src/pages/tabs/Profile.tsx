import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../Main';
import { COLORS } from '../../constants/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchPreferences from './Profile/tabs/SearchPreferences';
import HomeDetails from './Profile/tabs/HomeDetails';

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
        <View style={{height: 100, alignItems: 'center', justifyContent: 'center',}}>
            <Text>PROFILE HEADER (AVATAR, NAME)</Text>
        </View>

      <ProfileNavigationBar navigation={navigation} />
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
        tabBarActiveTintColor: '#141622',
        tabBarInactiveTintColor: '#686E74',
      }}>
      <Tab.Screen
        name="פרטי מגורים"
        component={HomeDetails}
        initialParams={navigation}
      />
      <Tab.Screen
        name="העדפות חיפוש"
        component={SearchPreferences}
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
    backgroundColor: '#00A3DA',
    height: 4,
  },
});

export default Profile;
