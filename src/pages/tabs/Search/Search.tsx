import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabScreensNames } from '@pages/tabs/Main/types';
import { COLORS } from '@constants/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabNavParamList } from '@pages/tabs/Main';
import { SEARCH } from '@pages/tabs/Search/consts';
import { SearchStackScreenName } from '@pages/types';
import { BaseText } from '@components/common/BaseText';
import { FlexibleSearch } from '@pages/tabs/Search/components/FlexibleSearch';
import { SearchByPreference } from '@pages/tabs/Search/components/SearchByPreference';

type SearchScreenNavigationProp = BottomTabNavigationProp<TabNavParamList, TabScreensNames.SEARCH>;

interface Props {
  navigation: SearchScreenNavigationProp;
}

const Tab = createMaterialTopTabNavigator();

const Search = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <BaseText customTextStyle={styles.title} text={SEARCH.TITLE} />
      <SearchNavigationBar navigation={navigation} />
    </View>
  );
};

const SearchNavigationBar = ({}: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={SEARCH.SEARCH_BY_PREFERENCE}
      screenOptions={{
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarActiveTintColor: COLORS.BLACK,
        tabBarInactiveTintColor: COLORS.INPUT_GREY,
      }}>
      <Tab.Screen name={SearchStackScreenName.FLEXIBLE_SEARCH} component={FlexibleSearch} />
      <Tab.Screen name={SearchStackScreenName.SEARCH_BY_PREFERENCE} component={SearchByPreference} />
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
