import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};

const countSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 2;
    },
    decrement: (state) => {
      state.count -= 2;
    },
    increaseByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, increaseByAmount } = countSlicer.actions;
export default countSlicer.reducer;
