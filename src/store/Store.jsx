import { configureStore } from '@reduxjs/toolkit';
import LogInSlice from '../Futers/LogInSlice';
import productsReducer from '../Futers/DataSlice'; // Import the products slice reducer

export const store = configureStore({
  reducer: {
    login: LogInSlice,
    products: productsReducer, // Use the slice reducer, not the thunk
  },
});
