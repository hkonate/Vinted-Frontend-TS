import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { offersApi } from "./ApiSlice";
import userReducer from "./UserSlice";
import filterReducer from "./Filter.slice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    [offersApi.reducerPath]: offersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offersApi.middleware),
});

setupListeners(store.dispatch);
