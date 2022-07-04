import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { PopupButton, PopupButtonType } from './PopupButton';

interface Props {
  content?: ReactElement;
  showConfirmButton?: boolean;
  confirmAction?: () => void;
  showCancelButton?: boolean;
}

const Popup = ({ content }: Props) => {
  return (
    <View style={styles.container}>
      {/*{content}*/}
      <PopupButton text="Cancel" type={PopupButtonType.CONFIRM} />
      <PopupButton text="Cancel" type={PopupButtonType.CANCEL} />
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
  },
});
