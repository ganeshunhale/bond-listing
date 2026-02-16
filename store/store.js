import { configureStore } from '@reduxjs/toolkit';
import bondsReducer from './slices/bondsSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    bonds: bondsReducer,
    filters: filtersReducer
  }
});
