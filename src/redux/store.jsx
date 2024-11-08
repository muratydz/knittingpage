import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slices/apiSlicer';

const store = configureStore({
  reducer: { 
    knitting : apiReducer
  },
});

export default store;
