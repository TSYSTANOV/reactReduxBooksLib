import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from "./reducer";
import filterSlice from "./filterSlice/filterSlice";
import bookSlice from "./bookSlice/bookSlice";
const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterSlice,
  },
});
export { store };
