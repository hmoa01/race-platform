import { configureStore } from '@reduxjs/toolkit';
import raceSlice from './raceSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    userStore: userSlice,
    raceStore: raceSlice,
  },
});

export default store;
