import { Dimensions, Platform } from 'react-native';

export const SPLASH_DELAY_MS = 3000;

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;

export const IS_ANDROID: boolean = Platform.OS === 'android';
export const IS_IOS: boolean = Platform.OS === 'ios';
