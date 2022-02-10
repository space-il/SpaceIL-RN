import { Text, View } from 'react-native';
import React from 'react';

const HomeDetails = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>פרטי מגורים כאן!</Text>
    </View>
  );
};

export default HomeDetails;
