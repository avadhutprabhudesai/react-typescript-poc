import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    dec: (state) => {
      state.count -= 1;
    },
    set: (state, action) => {
      state.count = action.payload;
    },
    reset: (state) => {
      return initialState;
    },
  },
});

export const { inc, dec, set, reset } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.count;

export default counterSlice;
