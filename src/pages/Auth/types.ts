export interface EmailSignInObj {
  email: string;
  password: string;
}

export interface EmailSignUpObj {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface EmailSignUpFirebaseObj {
  displayName: string;
  photoURL?: string;
}

export interface ResetPasswordObj {
  email: string;
}
