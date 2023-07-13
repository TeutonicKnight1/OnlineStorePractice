import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import listGoodsSlice from '../slices/listGoodsSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        listGoods: listGoodsSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;