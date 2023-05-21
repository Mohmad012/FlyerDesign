import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cart:{}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getAllCartItems: (state, action) => {
      state.cart = action.payload
    },
    deleteCart: (state) => {
      state.cart = {}
      state.cartItems = [];
    },
    updateProductQuantity: (state, action) => {
      const {item_id, qty} = action.payload;
      console.log('========================', action.payload)
      const itemIndex = state.cartItems.findIndex(item => item.item_id === item_id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty = qty;
      }
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.item_id === newItem.item_id);

      console.log('newItem', newItem )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += newItem.qty;
      } else {
        state.cartItems.push(newItem);
      }
    },
    deleteItemFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.item_id !== productId);
    },
  },
});

export const {
  getAllCartItems,
  updateProductQuantity,
  addItemToCart,
  deleteItemFromCart,
  deleteCart
} = cartSlice.actions;

export default cartSlice.reducer;