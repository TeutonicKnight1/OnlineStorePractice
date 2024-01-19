import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import listGoodsSlice from '../slices/listGoodsSlice';
import orderSlice from '../slices/orderSlice';
import customerSlice from '../slices/customerSlice';
import accountSlice from '../slices/accountSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        listGoods: listGoodsSlice,
        order: orderSlice,
        customer: customerSlice,
        account: accountSlice
    },
    devTools: true
});

export default store;