import React, { ReactElement } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { PopupButton, PopupButtonType } from './PopupButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/Constants';
import { useAppSelector } from '../../app/Hooks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../../pages/Main';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type PopupNavigationProp = StackNavigationProp<RootStackParamList, 'Popup'>;

interface Props {
  navigation: PopupNavigationProp;
  content?: ReactElement;
  showConfirmButton?: boolean;
  confirmAction?: () => void;
  showCancelButton?: boolean;
}

const Popup = ({ navigation, content }: Props) => {
  return (
    <View style={styles.container}>
      {/*{content}*/}
      <PopupButton text="OK" type={PopupButtonType.CONFIRM} action={() => {}} />
      <PopupButton
        text="Cancel"
        type={PopupButtonType.CANCEL}
        action={navigation.goBack}
      />
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: SCREEN_HEIGHT,
    // width: SCREEN_WIDTH,
    borderWidth: 1,
    borderColor: 'red',
  },
});
