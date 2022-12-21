import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Modesl S", "Modesl 3", "Modesl X", "Modesl Y"],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.cars.cars;

export default carSlice.reducer;
