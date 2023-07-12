import { createSlice } from "@reduxjs/toolkit";
let DATA = require("../data/data");

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        type: 'sort-name',
        sortDirection: 'ascending',
        data: DATA.DATA
    },
    reducers: {
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
    },
})

export const { setSort, setSortDirection, sortData } = sortSlice.actions;
export default sortSlice.reducer;