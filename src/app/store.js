import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/cars/carSlice.ts";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});
