import { createSlice } from '@reduxjs/toolkit';

const initialResState = { isMobile: window.innerWidth < 768 };

const resSlice = createSlice({
  name: 'resolution',
  initialState: initialResState,
  reducers: {
    distinguishDevice(state, action) {
      state.isMobile = action.payload < 768;
    },
  },
});

export const resActions = resSlice.actions;

export default resSlice.reducer;