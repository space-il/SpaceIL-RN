import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeDetails = () => {
  return (
    <View style={styles.container}>
      <Text>פרטי מגורים כאן!</Text>
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

export default HomeDetails;
