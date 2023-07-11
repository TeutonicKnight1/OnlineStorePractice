import { createSlice } from "@reduxjs/toolkit";

export const headerSumPriceSlice = createSlice({
    name: "headerSumPrice",
    initialState: {
        sumPrice: 0
    },
    reducers: {
        setSumPrice: (state, action) => {
            if (state.sumPrice == null) {
                const prices = action.payload.cart.map(item => item.price);
                state.sumPrice = prices.reduce((accumulator, item) => accumulator + item, 0);
            } 
            else{
                const prices = action.payload.cart.map(item => item.price);
                state.sumPrice = prices.reduce((accumulator, item) => accumulator + item, 0);
            }
        }
    }    
})

export const { setSumPrice } = headerSumPriceSlice.actions;
export default headerSumPriceSlice.reducer;
