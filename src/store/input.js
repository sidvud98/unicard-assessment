import { createSlice } from '@reduxjs/toolkit';

const initialInputState = { phoneNumber: '', agreed: false, validator: 'empty' };





const inputSlice = createSlice({
  name: 'input',
  initialState: initialInputState,
  reducers: {
    phoneNumber(state, action) {
      const okayRegex = /^[6-9]\d{9}$/;
      const warnRegex = /^[0-5]\d{9}$/;
      const atLeastRegex = /.*\d.*/;

      state.phoneNumber = action.payload;
      state.validator = okayRegex.test(action.payload) ? 'okay' :
        warnRegex.test(action.payload) ? 'warn' :
          atLeastRegex.test(action.payload) ? 'clear' :
            'empty';
    },
    clearPhoneNumber(state) {
      state.phoneNumber = '';
      state.validator = 'empty';
    },
    agreed(state) {
      state.agreed = !state.agreed
    }
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice.reducer;