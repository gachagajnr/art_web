import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { artSlice } from "features/art/artSlice";

export const store = configureStore({
  reducer: {
    [artSlice.reducerPath]: artSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artSlice.middleware),
});

setupListeners(store.dispatch);
