import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice/counter";

const store = configureStore({
  reducer: {
    myCounter: counterReducer,
  },
});

export default store;
