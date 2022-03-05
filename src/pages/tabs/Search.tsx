import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList, TabScreensNames } from '../Main';
import { COLORS } from '@constants/Colors';
import { hidePopup, showPopup } from '@components/popup/popupSlice';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';

type SearchScreenNavigationProp = BottomTabNavigationProp<TabNavParamList, TabScreensNames.SEARCH>;

interface Props {
  navigation: SearchScreenNavigationProp;
}

const Search = ({}: Props) => {
  const isPopupVisible = useAppSelector(state => state.popup.isVisible);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (isPopupVisible) {
            dispatch(hidePopup());
          } else {
            dispatch(showPopup());
          }
        }}>
        <Text>{`${isPopupVisible}`}</Text>
      </TouchableOpacity>
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
