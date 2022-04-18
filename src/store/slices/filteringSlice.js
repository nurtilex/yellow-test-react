import { createSlice } from '@reduxjs/toolkit';

const filteringSlice = createSlice({
  name: 'filtering',
  initialState: {
    from: '',
    to: '',
  },
  reducers: {
    setFrom(state, action) {
      state.from = action.payload;
    },
    setTo(state, action) {
      state.to = action.payload;
    },
  },
});
export const filteringActions = filteringSlice.actions;
export default filteringSlice.reducer;
