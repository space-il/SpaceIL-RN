import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SearchPreferences = () => {
  return (
    <View style={styles.container}>
      <Text>העדפות חיפוש כאן!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchPreferences;
