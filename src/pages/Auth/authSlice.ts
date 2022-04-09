import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isAuthenticated: boolean;
}

const initialState: PopupState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;
