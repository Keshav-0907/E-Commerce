import { configureStore } from "@reduxjs/toolkit";
import counterRedcuer from "/Users/keshavmalik/Desktop/Projects/Ecom1/shop/src/Features/CounterSlice.js";
export const store = configureStore({
  reducer: { counter: counterRedcuer },
});