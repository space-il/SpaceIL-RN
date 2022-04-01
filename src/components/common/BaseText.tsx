import React from 'react';
import { Text, StyleSheet, TextStyle, AccessibilityProps } from 'react-native';

interface Props {
  text: string;
  isRTL?: boolean;
  customTextStyle?: TextStyle;
  customAccessibilityProps?: AccessibilityProps;
}

export const BaseText = ({ text, isRTL = true, customTextStyle, customAccessibilityProps = {} }: Props) => {
  const rtlStyle: TextStyle = isRTL ? { textAlign: 'right' } : {};

  return (
    <Text maxFontSizeMultiplier={1} {...customAccessibilityProps} style={[styles.text, rtlStyle, customTextStyle]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
