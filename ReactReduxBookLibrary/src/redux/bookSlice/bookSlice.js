import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBookWithID } from "../../utils/CreateBookWithID";
import axios from "axios";
import { setError } from "../ErrorSlice/errorSlice";

const initialState = {
  books: [],
  isLoadingViaAPI: false,
};
export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
      // або
      // return thunkAPI.rejectWithValue(error)
    }
  }
);
const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      return { ...state, books: [...state.books, action.payload] };
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((item) => item.id !== action.payload),
      };
    },
    toogleFavorite: (state, action) => {
      return {
        ...state,
        books: state.books.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              favorite: !item.favorite,
            };
          }
          return item;
        }),
      };
    },
  },
  ///first option
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithID(action.payload, "API"));
      }
    });
    builder.addCase(fetchBook.pending, (state, action) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.isLoadingViaAPI = false;
    });
  },

  ///second option
  // extraReducers: {
  //   [fetchBook.fulfilled]: (state, action) => {
  //     if (action.payload.title && action.payload.author) {
  //       state.push(createBookWithID(action.payload, "API"));
  //     }
  //   },
  // },
});
// export const thunkFunction = (someParam) => async (dispatch, getState) => {
//   console.log(someParam);
// };
export const thunkFunction = (someParam) => (dispatch, getState, arg) => {
  console.log(someParam);
  console.log(dispatch);
  console.log(getState());
  console.log(arg);
};
// export const thunkFunction = async (dispatch, getState) => {
//   try {
//     const res = await axios.get("http://localhost:4000/random-book");
//     if (res.data && res.data.title && res.data.author) {
//       dispatch(addBook(createBookWithID(res.data, "API")));
//     }
//   } catch (error) {
//     console.log("error adding random book with api: " + error.message);
//   }
// };
export const { addBook, deleteBook, toogleFavorite } = booksSlice.actions;
export default booksSlice.reducer;
