import { Text, View } from 'react-native';
import React from 'react';

const SearchPreferences = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>העדפות חיפוש כאן!</Text>
    </View>
  );
};

export default SearchPreferences;
