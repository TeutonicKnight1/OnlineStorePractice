import { createSlice } from "@reduxjs/toolkit";
const DATA = require("../data/data");

export const listGoodsSlice = createSlice({
    name: "counter",
    initialState: {
        data: DATA.DATA,
        type: 'sort-name',
        sortDirection: 'ascending',
    },
    reducers: {
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

            if (state.type === 'sort-name' && state.sortDirection === 'ascending') {
                sortedData = [...state.data].sort((a, b) => a.name.localeCompare(b.name));
            } else if (state.type === 'sort-name' && state.sortDirection === 'descending') {
                sortedData = [...state.data].sort((a, b) => b.name.localeCompare(a.name));
            } else if (state.type === 'sort-price' && state.sortDirection === 'ascending') {
                sortedData = [...state.data].sort((a, b) => a.price - b.price);
            } else if (state.type === 'sort-price' && state.sortDirection === 'descending') {
                sortedData = [...state.data].sort((a, b) => b.price - a.price);
            } else {
                sortedData = state.data;
            }

            state.data = sortedData;
        }
    }
})

export const { increment, decrement, setSort, setSortDirection, sortData } = listGoodsSlice.actions;
export default listGoodsSlice.reducer;
