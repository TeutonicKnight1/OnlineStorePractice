import { createSlice } from "@reduxjs/toolkit";
const DATA = require("../data/data");

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        data: DATA
    },
    reducers: {
        increment: (state, action) => {
            state.data.DATA[action.payload.id].count += 1;
        },
        decrement: (state, action) => {
            if (state.data.DATA[action.payload.id].count > 0) {
                state.data.DATA[action.payload.id].count -= 1;
            }
        },
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
