import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../../App';
import { COLORS } from '../../constants/Colors';

type ProfileScreenNavigationProp = BottomTabNavigationProp<
  TabNavParamList,
  'Profile'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Profile = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>PROFILEEE</Text>
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
