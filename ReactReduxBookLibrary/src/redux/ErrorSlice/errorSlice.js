import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const ErrorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    setError(state, action) {
      return action.payload;
    },
    clearError() {
      return initialState;
    },
  },
});
export const { setError, clearError } = ErrorSlice.actions;
export default ErrorSlice.reducer;
