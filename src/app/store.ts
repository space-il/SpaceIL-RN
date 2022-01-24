import { configureStore } from '@reduxjs/toolkit';
import { popupSlice } from '../components/popup/popupSlice';

export const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
