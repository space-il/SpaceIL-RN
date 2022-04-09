import auth from '@react-native-firebase/auth';
import { AuthResult, AuthState } from './types';

// TODO(Avshalom): fix res type once types issues related to FirebaseAuthTypes will be resolved
const buildAuthResultObj = (authState: AuthState, res: any): AuthResult => ({
  authState,
  res,
});

const emailSignUp = async (email: string, pass: string): Promise<AuthResult> => {
  try {
    const authRes = await auth().createUserWithEmailAndPassword(email, pass);

    return buildAuthResultObj(AuthState.EMAIL_SIGNUP_SUCCESS, authRes);
  } catch (error: any) {
    switch (error.code) {
      case AuthState.EMAIL_ALREADY_IN_USE:
        return buildAuthResultObj(AuthState.EMAIL_ALREADY_IN_USE, error);
      case AuthState.INVALID_EMAIL:
        return buildAuthResultObj(AuthState.INVALID_EMAIL, error);
      default:
        return buildAuthResultObj(AuthState.SIGNUP_ERROR, error);
    }
  }
};

const emailSignIn = async (email: string, pass: string): Promise<AuthResult> => {
  try {
    const authRes = await auth().signInWithEmailAndPassword(email, pass);

    return buildAuthResultObj(AuthState.EMAIL_SIGNIN_SUCCESS, authRes);
  } catch (error: any) {
    switch (error.code) {
      case AuthState.INVALID_EMAIL:
        return buildAuthResultObj(AuthState.INVALID_EMAIL, error);
      default:
        return buildAuthResultObj(AuthState.SIGNIN_ERROR, error);
    }
  }
};

const signOut = async (): Promise<AuthState> => {
  try {
    await auth().signOut();

    return AuthState.SIGNOUT_SUCCESS;
  } catch (error) {
    return AuthState.SIGNOUT_ERROR;
  }
};

export const authManager = {
  emailSignUp,
  emailSignIn,
  signOut,
};