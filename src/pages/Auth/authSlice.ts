import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isAuthenticated: boolean;
  userInfo: any | null; // TODO(Avshalom): we should define a type once we know what user data do we need
}

const initialState: PopupState = {
  isAuthenticated: false,
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignInAuthInfo: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    setSignUpAuthInfo: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    setSignOutAuthInfo: state => {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
});

export const { setSignInAuthInfo, setSignUpAuthInfo, setSignOutAuthInfo } = authSlice.actions;
