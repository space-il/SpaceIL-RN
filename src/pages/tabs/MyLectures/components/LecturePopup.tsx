import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal } from '@components/common/modal/Modal';
import RenderJsonKeyValueData from '@components/common/RenderJsonData';
import { BaseText } from '@components/common/BaseText';
import { Button } from '@components/common/buttons/Button';
import { BUTTON_LABELS } from '@pages/Auth/common/consts';

interface LecturePopupProps {
  title?: string;
  description?: Record<string, string>;
  confirmAction?: () => void;
}

export const LecturePopup = (props: LecturePopupProps) => {
  const { title, description, confirmAction } = props;

  const [isModalVisible, setIsModalVisible] = useState(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <Modal isVisible={isModalVisible}>
      <>
        <BaseText text={title} customTextStyle={styles.popupTitle} />
        {!!description && <RenderJsonKeyValueData text={description} />}
        <Button
          btnLabel={BUTTON_LABELS.CONFIRM_BTN_LABEL}
          onPress={confirmAction}
          customBtnContainerStyle={styles.primaryBtnContainer}
          customBtnLabelStyle={styles.buttonTextStyle}
        />
        <Button
          btnLabel={BUTTON_LABELS.CANCEL_BTN_LABEL}
          onPress={closeModal}
          customBtnContainerStyle={styles.secondaryBtnContainer}
          customBtnLabelStyle={styles.buttonTextStyle}
          secondaryBtn={true}
        />
      </>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 18,
    lineHeight: 24,
  },
  popupTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  primaryBtnContainer: {
    marginTop: 10,
  },
  secondaryBtnContainer: {
    marginTop: 5,
    marginBottom: -25,
  },
});
