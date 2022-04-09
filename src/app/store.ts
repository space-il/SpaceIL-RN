import { configureStore } from '@reduxjs/toolkit';
import { popupSlice } from '@components/popup/popupSlice';
import { authSlice } from '@pages/Auth/authSlice';

export const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
