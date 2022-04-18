import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    info: {
      email: '',
      first_name: '',
      last_name: '',
      id: '',
      phone: '',
      role: '',
    },
    jogs: [],
  },
  reducers: {
    setUser(state, action) {
      state.info = action.payload;
    },
    setJogs(state, action) {
      state.jogs = action.payload;
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
