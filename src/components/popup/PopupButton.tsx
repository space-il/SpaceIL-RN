import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

export enum PopupButtonType {
  CONFIRM,
  CANCEL,
}

interface Props {
  text: string;
  type: PopupButtonType;
  action?: () => void;
  cancelAction?: () => void;
  customStyle?: ViewStyle;
}

const PopupButton = ({ text, type, action, customStyle }: Props) => {
  return (
    <Pressable onPress={action} style={[styles.container, customStyle]}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export { PopupButton };
