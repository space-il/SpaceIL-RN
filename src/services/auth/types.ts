// import { FirebaseAuthTypes } from '@react-native-firebase/auth'; TODO(Avshalom): DO NOT remove the commented imports please
// export import UserCredential = FirebaseAuthTypes.UserCredential;
// export import NativeFirebaseAuthError = FirebaseAuthTypes.NativeFirebaseAuthError;

export enum AuthState {
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  INVALID_EMAIL = 'auth/invalid-email',
  EMAIL_SIGNUP_SUCCESS = 'auth/email-signup-success',
  EMAIL_SIGNIN_SUCCESS = 'auth/email-signin-success',
  SIGNOUT_SUCCESS = 'auth/signout-success',
  RESET_PASSWORD_SUCCESS = 'auth/reset-password-success',
  SIGNUP_ERROR = 'auth/signup-error',
  SIGNIN_ERROR = 'auth/signin-error',
  SIGNOUT_ERROR = 'auth/signout-error',
  RESET_PASSWORD_ERROR = 'auth/reset-password-error',
}

export interface AuthResult {
  authState: AuthState;
  res: any; //UserCredential | NativeFirebaseAuthError; // TODO(Avshalom): fix types issues related to FirebaseAuthTypes
}
