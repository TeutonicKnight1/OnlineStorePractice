import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    sumPrice: 0
  },
  reducers: {
    addGoodsCart: (state, action) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === action.payload.id);

      if (!existingItem) {
        state.cart.push(action.payload);
      }
      else {
        existingItem.count += 1;
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeGoodsCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id && item.count === 1);

      if (itemIndex !== -1) {
        state.cart.splice(index, 1);
      }
      else {
        if (state.cart[index] && state.cart[index].count) {
          state.cart[index].count -= 1;
        }
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setSumPrice: (state, action) => {
      const totalPrice = state.cart.reduce((acc, item) => {
          return acc + item.price * item.count;
      }, 0)

      state.sumPrice = totalPrice;
    }
  }
});

export const { addGoodsCart, removeGoodsCart, setSumPrice } = cartSlice.actions;
export default cartSlice.reducer;

// export const {
//   reducer: cartReducer,
//   actions: cartActions,
// } = cartSlice