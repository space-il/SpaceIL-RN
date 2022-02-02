import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../Main';
import { COLORS } from '../../constants/Colors';
import FiltersBubbles from '../../components/filtersBubbles/FiltersBubbles';

type ProfileScreenNavigationProp = BottomTabNavigationProp<
  TabNavParamList,
  'Profile'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Profile = ({ navigation }: Props) => {
  const filtersDataMock = [
    {
      bubbleText: 'ממתינות לתיאום (1)',
      filterAction: () => console.log('AA'),
    },
    {
      bubbleText: 'ממתינות לדיווח (2)',
      filterAction: () => console.log('BB'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>
      <FiltersBubbles data={filtersDataMock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.LIGHT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
