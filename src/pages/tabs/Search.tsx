import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../../App';
import { COLORS } from '../../constants/Colors';

type SearchScreenNavigationProp = BottomTabNavigationProp<
  TabNavParamList,
  'Search'
>;

interface Props {
  navigation: SearchScreenNavigationProp;
}

const Search = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>SEARCHHH</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.LIGHT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
