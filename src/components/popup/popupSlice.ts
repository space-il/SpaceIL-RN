import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isVisible: boolean;
}

const initialState: PopupState = {
  isVisible: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup: state => {
      state.isVisible = true;
    },
    hidePopup: state => {
      state.isVisible = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;
