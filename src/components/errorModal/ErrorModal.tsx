import React from 'react';
import { Modal } from '@components/common/modal/Modal';
import { useAppSelector } from '@app/storeUtils';
import { selectErrorInfo } from '@app/appSelectors';
import { ERROR_LABELS } from '@components/errorModal/consts';

export const ErrorModal = () => {
  const { isVisible, title, description, btnHandler } = useAppSelector(selectErrorInfo);

  return (
    <Modal
      isVisible={isVisible}
      primaryBtnPressHandler={btnHandler}
      modalTitleText={title || ERROR_LABELS.TITLE}
      primaryBtnLabel={description || ERROR_LABELS.BTN_LABEL}
    />
  );
};
