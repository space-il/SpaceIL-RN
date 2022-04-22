import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNModal, { ModalProps } from 'react-native-modal';
import { BaseText } from '@components/common/BaseText';
import { Button } from '@components/common/buttons/Button';
import { COLORS } from '@constants/Colors';

interface Props {
  isVisible: boolean;
  modalTitleText: string;
  primaryBtnLabel: string;
  modalDescriptionText?: string;
  secondaryBtnLabel?: string;
  customModalProps?: ModalProps;
  primaryBtnPressHandler?: () => void;
  secondaryBtnPressHandler?: () => void;
}

export const Modal: FC<Props> = ({
  isVisible = false,
  customModalProps,
  modalTitleText = 'אופס משהו קרה',
  modalDescriptionText,
  primaryBtnLabel = 'אישור',
  secondaryBtnLabel,
  primaryBtnPressHandler,
  secondaryBtnPressHandler,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(isVisible);
  const modalProps = { backdropOpacity: 0.5, ...customModalProps, isVisible: isModalVisible };

  useEffect(() => {
    setIsModalVisible(isVisible);
  }, [isVisible]);

  const closeModal = () => setIsModalVisible(false);

  return (
    <RNModal {...modalProps}>
      <View style={styles.modalContent}>
        <BaseText text={modalTitleText} customTextStyle={styles.modalTitle} />
        {modalDescriptionText && <BaseText text={modalDescriptionText} customTextStyle={styles.modalDescription} />}
        <Button
          btnLabel={primaryBtnLabel}
          onPress={primaryBtnPressHandler || closeModal}
          customBtnContainerStyle={styles.primaryBtnContainer}
        />
        {secondaryBtnLabel && (
          <Button
            secondaryBtn
            btnLabel={secondaryBtnLabel}
            onPress={secondaryBtnPressHandler || closeModal}
            customBtnContainerStyle={styles.secondaryBtnContainer}
          />
        )}
      </View>
    </RNModal>
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
  secondaryBtnContainer: {
    marginTop: 5,
    marginBottom: -10,
  },
});
