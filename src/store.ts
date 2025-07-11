import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './features/shopping/shoppingSlice';

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;