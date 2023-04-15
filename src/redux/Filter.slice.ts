import { createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";
export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    limit: 30,
    price: {
      sort: "price-asc",
      minMax: [10, 100],
    },
  },
  reducers: {
    UpdateOfferPerPage: (state, actions: PayloadAction<number>) => {
      state.limit = actions.payload;
    },

    SortPrice: (state, actions: PayloadAction<string>) => {
      state.price.sort = actions.payload;
    },
    PriceRange: (state, actions: PayloadAction<number[]>) => {
      state.price.minMax = actions.payload;
    },
    Search: (state, actions: PayloadAction<string>) => {
      state.search = actions.payload;
    },
  },
});

export const { UpdateOfferPerPage, SortPrice, PriceRange, Search } =
  filterSlice.actions;

export default filterSlice.reducer;
