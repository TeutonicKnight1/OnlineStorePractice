import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import listGoodsSlice from '../slices/listGoodsSlice';
import orderSlice from '../slices/orderSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        listGoods: listGoodsSlice,
        order: orderSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;