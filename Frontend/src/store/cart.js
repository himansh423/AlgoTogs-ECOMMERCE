import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem:[],
    initialCartItem:[],
    styling: {},
  },
  reducers: {
    cartClick: (state, action) => {
      state.styling = {
        transform: "translateX(0px)",
        transition: "all 0.3s linear",
      };
    },
    crossClick: (state, action) => {
      state.styling = {
        transform: "translateX(600px)",
        transition: "all 0.3s linear",
      };
    },
    addCartItem: (state, action) => {
      const { data } = action.payload;
      state.cartItem.push(data);
    },
    alreadyAddCartItem: (state, action) => {
      const { data } = action.payload;
      console.log("cart",data)
      state.initialCartItem = data;
    },
    deleteCartItem: (state,action) => {
      const {_id} = action.payload;
      state.cartItem = state.cartItem.filter(item => item._id !== _id);
    },
    alreadyAddCartItemDelete :(state,action) => {
      const {_id} = action.payload;
      state.initialCartItem = state.initialCartItem.filter(item => item._id !== _id);
    }
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;



