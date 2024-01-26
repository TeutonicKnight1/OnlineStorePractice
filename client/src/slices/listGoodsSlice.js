import { createSlice } from "@reduxjs/toolkit";

const listGoodsSlice = createSlice({
  name: "counter",
  initialState: {
    originalData: [],
    data: [],
    type: "sort-name",
    sortDirection: "ascending",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.originalData = action.payload;
    },
    increment: (state, action) => {
      state.data[action.payload.id].count += 1;
    },
    decrement: (state, action) => {
      if (state.data[action.payload.id].count > 0) {
        state.data[action.payload.id].count -= 1;
      }
    },
    setSort: (state, action) => {
      state.type = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
    sortData: (state) => {
      let sortedData;

      if (state.type === "sort-name" && state.sortDirection === "ascending") {
        sortedData = [...state.data].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (
        state.type === "sort-name" &&
        state.sortDirection === "descending"
      ) {
        sortedData = [...state.data].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (
        state.type === "sort-price" &&
        state.sortDirection === "ascending"
      ) {
        sortedData = [...state.data].sort((a, b) => a.price - b.price);
      } else if (
        state.type === "sort-price" &&
        state.sortDirection === "descending"
      ) {
        sortedData = [...state.data].sort((a, b) => b.price - a.price);
      } else {
        sortedData = state.data;
      }

      state.data = sortedData;
    },
    FilterData: (state, action) => {
      const { min, max, vendors } = action.payload;
      const sortedData = state.originalData
        .slice()
        .sort((a, b) => a.price - b.price);
      const filteredDataByPrice = sortedData.filter(
        (item) => item.price >= min && item.price <= max
      );
      if (vendors.length === 0) {
        state.data = filteredDataByPrice;
      } else {
        const filteredData = filteredDataByPrice.filter((item) =>
          vendors.includes(item.vendor)
        );
        state.data = filteredData;
      }
    },
    searchData: (state, action) => {
      const query = action.payload.toLowerCase();
      let filteredData = []
      if (state.data.length != 0) {
        filteredData = state.data.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
      } else {
        filteredData = state.originalData.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
      }
      state.data = filteredData;
    },
  },
});

export const {
  setData,
  increment,
  decrement,
  setSort,
  setSortDirection,
  sortData,
  FilterData,
  searchData,
} = listGoodsSlice.actions;
export default listGoodsSlice.reducer;
