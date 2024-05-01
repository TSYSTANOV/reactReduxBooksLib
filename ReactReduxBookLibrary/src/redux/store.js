import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./ErrorSlice/errorSlice";
import filterSlice from "./filterSlice/filterSlice";
import bookSlice from "./bookSlice/bookSlice";
const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterSlice,
    error: errorSlice,
  },
});
export { store };
