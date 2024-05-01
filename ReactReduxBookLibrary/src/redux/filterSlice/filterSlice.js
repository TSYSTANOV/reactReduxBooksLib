import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
};
const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
    },
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload };
    },
    setFavoriteFilter: (state) => {
      return { ...state, onlyFavorite: !state.onlyFavorite };
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});
export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setFavoriteFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
