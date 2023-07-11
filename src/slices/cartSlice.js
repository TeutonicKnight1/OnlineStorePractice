import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },
  reducers: {
    addGoodsCart: (state, action) => {
      state.cart.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeGoodsCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    }
  }
});

export const { addGoodsCart, removeGoodsCart } = cartSlice.actions;
export default cartSlice.reducer;