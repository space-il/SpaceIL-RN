import React, { useState } from 'react';
import { Modal } from '@components/common/modal/Modal';
import { useAppSelector } from '@app/storeUtils';
import { selectErrorInfo } from '@app/appSelectors';
import { ERROR_LABELS } from '@components/errorModal/consts';
import { Button } from '@components/common/buttons/Button';
import { StyleSheet, View } from 'react-native';
import { BaseText } from '@components/common/BaseText';
import { COLORS } from '@constants/Colors';

export const ErrorModal = () => {
  const { isVisible, title, description, btnHandler } = useAppSelector(selectErrorInfo);
  const [isModalVisible, setIsModalVisible] = useState(isVisible);

  const closeModal = () => setIsModalVisible(false);

  return (
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <BaseText text={title || ERROR_LABELS.TITLE} customTextStyle={styles.modalTitle} />
          {description && <BaseText text={description} customTextStyle={styles.modalDescription} />}
          <Button
              btnLabel={description || ERROR_LABELS.BTN_LABEL}
              onPress={btnHandler || closeModal}
              customBtnContainerStyle={styles.primaryBtnContainer}
          />
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: COLORS.WHITE,
    padding: 25,
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
  primaryBtnContainer: {
    marginTop: 10,
  },
  modalDescription: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
