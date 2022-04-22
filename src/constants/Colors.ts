import { DefaultTheme } from '@react-navigation/native';

export const COLORS = {
  BG_DEFAULT_TEMP: '#dad',
  LIGHT_GREY: '#bbb',
  LIGHT_BLUE: '#00A3DA',
  BLUE: '#0274BB',
  LIGHT_GREEN: '#90ee90',
  LIGHT_ORANGE: '#fed8b1',
  WHITE: '#FFFFFF',
  GRAY: '#E3E5EC',
  BLACK: '#141622',
  // Formal Colors:
  DEEP_BLUE: '#0074bb',
  INPUT_GREY: '#686E74',
};

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
