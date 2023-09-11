import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
    codingblocks: [1, 2, 3, 3, 33, 3],
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByHundred: (state) => {
      state.count += 100;
    },
    decrementByHundred: (state) => {
      state.count -= 100;
    },
  },
});

console.log(counterSlice);
export const { increment, decrement, incrementByHundred, decrementByHundred } =
  counterSlice.actions;

export default counterSlice.reducer;
