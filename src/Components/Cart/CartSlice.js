import { createSlice } from '@reduxjs/toolkit';

const items = JSON.parse(localStorage.getItem('cartItems')) || [];
const totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
const totalQuantity = JSON.parse(localStorage.getItem('totalQuantity')) || 0;

const initialState = {
  cart: items,
  totalQuantity,
  totalPrice,
};

const updateLocalStorage = (cart, totalPrice, totalQuantity) => {
  localStorage.setItem('cartItems', JSON.stringify(cart));
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
};

const roundToTwoDecimals = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.find(item => item.id === action.payload.id);
      if (find) {
        find.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice = roundToTwoDecimals(
        state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
      );

      updateLocalStorage(state.cart, state.totalPrice, state.totalQuantity);
    },
    deletefromCart: (state, action) => {
      const itemToRemove = state.cart.find(item => item.id === action.payload);
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.cart = state.cart.filter(item => item.id !== action.payload);
        
        // Recalculate total price after filtering
        state.totalPrice = roundToTwoDecimals(
          state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
        );

        // Reset total to zero if the cart is empty
        if (state.cart.length === 0) {
          state.totalPrice = 0;
        }
      }

      updateLocalStorage(state.cart, state.totalPrice, state.totalQuantity);
    },
    increment: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice = roundToTwoDecimals(state.totalPrice + item.price);

        updateLocalStorage(state.cart, state.totalPrice, state.totalQuantity);
      }
    },
    decrement: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) { // Ensure quantity doesn't go below 1
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice = roundToTwoDecimals(state.totalPrice - item.price);

        updateLocalStorage(state.cart, state.totalPrice, state.totalQuantity);
      }
    },
    getcartTotal: (state) => {
      const { totalPrice, totalQuantity } = state.cart.reduce((totals, item) => {
        const itemTotal = item.price * item.quantity;
        totals.totalPrice += itemTotal;
        totals.totalQuantity += item.quantity;
        return totals;
      }, { totalPrice: 0, totalQuantity: 0 });
      state.totalPrice = roundToTwoDecimals(totalPrice);
      state.totalQuantity = totalQuantity;

      updateLocalStorage(state.cart, state.totalPrice, state.totalQuantity);
    },
  },
});

export const { addToCart, deletefromCart, increment, decrement, getcartTotal } = CartSlice.actions;
export default CartSlice.reducer;
