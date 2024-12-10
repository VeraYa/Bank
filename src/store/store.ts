import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/currencySlice';
import newsReducer from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
