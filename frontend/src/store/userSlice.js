import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    storeUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('rp_user', JSON.stringify(action.payload));
    },
    restoreUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { storeUser, restoreUser } = userSlice.actions;
export default userSlice.reducer;
