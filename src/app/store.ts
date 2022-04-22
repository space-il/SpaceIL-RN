import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '@app/appSlice';
import { authSlice } from '@pages/Auth/authSlice';
import { popupSlice } from '@components/popup/popupSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    popup: popupSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
