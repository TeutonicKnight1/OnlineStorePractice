import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import counterSlice from '../slices/counterSlice';
import headerSumPriceSlice from '../slices/headerSumPriceSlice';
import sortSlice from '../slices/sortSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        counter: counterSlice,
        headerSumPrice: headerSumPriceSlice,
        sort: sortSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;