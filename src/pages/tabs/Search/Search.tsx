import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabScreensNames } from '@pages/tabs/Main/types';
import { COLORS } from '@constants/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabNavParamList } from '@pages/tabs/Main';
import SearchByPreference from '@pages/tabs/Search/tabs/SearchByPreference';
import FlexibleSearch from '@pages/tabs/Search/tabs/FlexibleSearch';

type SearchScreenNavigationProp = BottomTabNavigationProp<TabNavParamList, TabScreensNames.SEARCH>;

interface Props {
  navigation: SearchScreenNavigationProp;
}

const Tab = createMaterialTopTabNavigator();

const Search = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>חיפוש הרצאה</Text>
      <SearchNavigationBar navigation={navigation} />
    </View>
  );
};

const SearchNavigationBar = ({}: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={'חיפוש לפי העדפות'}
      screenOptions={{
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarActiveTintColor: COLORS.BLACK,
        tabBarInactiveTintColor: COLORS.INPUT_GREY,
      }}>
      <Tab.Screen name="חיפוש גמיש " component={FlexibleSearch} />
      <Tab.Screen name="חיפוש לפי העדפות" component={SearchByPreference} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarIndicatorStyle: {
    backgroundColor: COLORS.LIGHT_BLUE,
    height: 4,
  },
  title: {
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginRight: 24,
    marginBottom: 8,
  },
});

export default Search;
