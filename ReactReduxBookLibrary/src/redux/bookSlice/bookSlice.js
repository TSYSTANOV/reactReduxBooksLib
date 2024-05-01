import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload];
    },
    deleteBook: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toogleFavorite: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            favorite: !item.favorite,
          };
        }
        return item;
      });
    },
  },
});
export const { addBook, deleteBook, toogleFavorite } = booksSlice.actions;
export default booksSlice.reducer;
