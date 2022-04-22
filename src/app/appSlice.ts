import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, GeneralError } from '@app/appStateTypes';

const initialState: AppState = {
  generalError: {
    isVisible: false,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showErrorModal: (state, action: PayloadAction<GeneralError | undefined>) => {
      state.generalError.isVisible = true;
      state.generalError.title = action.payload?.title;
      state.generalError.description = action.payload?.description;
      state.generalError.btnHandler = action?.payload?.btnHandler;
    },
    hideErrorModal: state => {
      state.generalError = { ...initialState, isVisible: false };
    },
  },
});

export const { showErrorModal, hideErrorModal } = appSlice.actions;
