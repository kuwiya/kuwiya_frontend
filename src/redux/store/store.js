import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slice/searchSlice";
import locationSlice from "../slice/locationSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    location: locationSlice,
  },
});

export default store;
