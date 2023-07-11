import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import counterSlice from '../slices/counterSlice';
import headerSumPriceSlice from '../slices/headerSumPriceSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        counter: counterSlice,
        headerSumPrice: headerSumPriceSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;