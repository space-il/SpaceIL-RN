import React, { FC, ReactElement, useEffect, useState } from 'react';
import RNModal from 'react-native-modal';

interface Props {
  isVisible: boolean;
  children: ReactElement;
}

export const Modal: FC<Props> = (props: Props) => {
  const { isVisible, children } = props;
  const [isModalVisible, setIsModalVisible] = useState(isVisible);
  const modalProps = { backdropOpacity: 0.5, isVisible: isModalVisible };

  useEffect(() => {
    setIsModalVisible(isVisible);
  }, [isVisible]);

  return <RNModal {...modalProps}>{children}</RNModal>;
};
