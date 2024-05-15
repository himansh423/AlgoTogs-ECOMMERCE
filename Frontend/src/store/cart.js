import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    initialCartItem: [],
    styling: {},
    total: 0,
  },
  reducers: {
    cartClick: (state, action) => {
      state.styling = { transform: "translateX(0px)", transition: "all 0.3s linear" };
    },
    crossClick: (state, action) => {
      state.styling = { transform: "translateX(600px)", transition: "all 0.3s linear" };
    },
    addCartItem: (state, action) => {
      const { data } = action.payload;
      const existingItem = state.cartItem.find((item) => item._id === data._id);

      if (existingItem) {
        existingItem.quantity += data.quantity;
      } else {
        state.cartItem.push(data);
      }

      state.total = calculateTotal(state.cartItem, state.initialCartItem);
    },
    alreadyAddCartItem: (state, action) => {
      const { data } = action.payload;
      state.initialCartItem = data;
      state.total = calculateTotal(state.cartItem, state.initialCartItem);
    },
    deleteCartItem: (state, action) => {
      const { _id } = action.payload;
      state.cartItem = state.cartItem.filter((item) => item._id !== _id);
      state.initialCartItem = state.initialCartItem.filter((item) => item._id !== _id);
      state.total = calculateTotal(state.cartItem, state.initialCartItem);
    },
    updateCartItemQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const itemToUpdate = state.cartItem.find((item) => item._id === _id);

      if (itemToUpdate) {
        const itemPrice = itemToUpdate.price;
        const quantityDiff = quantity - itemToUpdate.quantity;
        itemToUpdate.quantity = quantity;
        state.total += quantityDiff * itemPrice;
      }

      const initialItemToUpdate = state.initialCartItem.find((item) => item._id === _id);

      if (initialItemToUpdate) {
        const itemPrice = initialItemToUpdate.price;
        const quantityDiff = quantity - initialItemToUpdate.quantity;
        initialItemToUpdate.quantity = quantity;
        state.total += quantityDiff * itemPrice;
      }
    },
    updateAlreadyCartItemQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const initialItemToUpdate = state.initialCartItem.find((item) => item._id === _id);

      if (initialItemToUpdate) {
        const itemPrice = initialItemToUpdate.price;
        const quantityDiff = quantity - initialItemToUpdate.quantity;
        initialItemToUpdate.quantity = quantity;
        state.total += quantityDiff * itemPrice;
      }
    },
  },
});

const calculateTotal = (cartItems, initialCartItems) => {
  const cartTotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const initialCartTotal = initialCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  return cartTotal + initialCartTotal;
};

export const cartAction = cartSlice.actions;
export default cartSlice;