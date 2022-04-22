import React, { FC, useEffect, useState } from 'react';
import { Modal } from '@components/common/modal/Modal';

interface Props {
  isVisible: boolean;
}

export const ErrorModal: FC<Props> = ({ isVisible = false }) => {
  const [isModalVisible, setIsModalVisible] = useState(isVisible);

  useEffect(() => {
    setIsModalVisible(isVisible);
  }, [isVisible]);

  return (
    <Modal
      isVisible={isModalVisible}
      modalTitleText={'אופס קרתה לנו שגיאה'}
      modalDescriptionText={
        'כנראה שהייתה לנו שגיאה שאנחנו לא מצליחים לפענח, אז בוא ננסה שוב את הפעולה הקודמת ואולי נצליח :)'
      }
      primaryBtnLabel={'אישור'}
      secondaryBtnLabel={'ביטול'}
    />
  );
};
