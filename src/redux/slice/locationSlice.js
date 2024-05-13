import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "Location",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    resetLocation: (state) => {
      state.location = initialState.location;
    },
  },
});

export const { setLocation, resetLocation } = locationSlice.actions;

export const selectLocation = (state) => state.location.location;

export default locationSlice.reducer;
