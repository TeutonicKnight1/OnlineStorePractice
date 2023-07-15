import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import listGoodsSlice from '../slices/listGoodsSlice';
import orderSlice from '../slices/orderSlice';
import customerSlice from '../slices/customerSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        listGoods: listGoodsSlice,
        order: orderSlice,
        customer: customerSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;