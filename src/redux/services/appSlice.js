import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    redirectTo: null,
  },
  reducers: {
    setRedirectPath: (state, action) => {
      state.redirectTo = action.payload;
    },
    clearRedirectPath: (state) => {
      state.redirectTo = null;
    },
  },
});

export const { setRedirectPath, clearRedirectPath } = appSlice.actions;
export default appSlice.reducer;
