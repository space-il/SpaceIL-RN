import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '@constants/Colors';
import { SPLASH_DELAY_MS } from '@constants/Constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/AppNavigator';
import { MainStackScreensNames } from '@pages/types';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, MainStackScreensNames.SPLASH>;

interface Props {
  navigation: SplashScreenNavigationProp;
}

const Splash = ({ navigation }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(MainStackScreensNames.MAIN);
    }, SPLASH_DELAY_MS);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>SPLASHHH</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.BG_DEFAULT_TEMP,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
