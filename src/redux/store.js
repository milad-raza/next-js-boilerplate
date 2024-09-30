// store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./services/apiSlice"; 
import appReducer from "./services/appSlice"; 
import apiMiddleware from "./apiMiddleware";

export const store = configureStore({
  reducer: {
    app: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, apiMiddleware),
});

setupListeners(store.dispatch);
