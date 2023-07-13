import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        step: 1,
    },
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload;
        },
    },
})

export const { setStep } = orderSlice.actions;
export default orderSlice.reducer