import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    resetSearch: (state) => {
      state.search = initialState.search;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export const selectSearch = (state) => state.search.search;
export default searchSlice.reducer;
