import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isAuthenticated: boolean;
  userInfo: any | null; // TODO(Avshalom): we should define a type once we know what user data do we need
}

const initialState: PopupState = {
  isAuthenticated: true,
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    clearAuthInfo: state => {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
});

export const { setAuthInfo, clearAuthInfo } = authSlice.actions;
