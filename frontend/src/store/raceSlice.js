import { createSlice } from '@reduxjs/toolkit';

const raceSlice = createSlice({
  name: 'races',
  initialState: {
    races: [],
    changes: false,
  },
  reducers: {
    storeRaces: (state, action) => {
      state.races = action.payload;
    },

    tableChanges: (state, action) => {
      state.changes = !state.changes;
    },
  },
});

export const { storeRaces, tableChanges } = raceSlice.actions;
export default raceSlice.reducer;
