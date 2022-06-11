import React, { ReactElement, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal } from '@components/common/modal/Modal';
import RenderJsonKeyValueData from '@components/common/RenderJsonData';
import { popupData } from '@components/popup/popup.mock';

interface Props {
  content?: ReactElement;
  showConfirmButton?: boolean;
  confirmAction?: () => void;
  showCancelButton?: boolean;
}

const Popup = ({ content }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <Modal
      isVisible={isModalVisible}
      modalTitleText={'האם תרצו לקחת את ההרצאה?'}
      primaryBtnLabel={'אישור'}
      secondaryBtnLabel={'ביטול'}
      customTitleStyle={styles.popupTitle}>
      <RenderJsonKeyValueData text={popupData} />
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  popupTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
