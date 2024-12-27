import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./features/habits/habits";

export const store = configureStore({
  reducer: habitsReducer,
});
