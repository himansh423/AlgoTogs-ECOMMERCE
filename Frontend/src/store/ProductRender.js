import { createSlice } from "@reduxjs/toolkit";

const ProductRenderSlice = createSlice({
  name:"ProductRender",
  initialState:{
    productRender:[],
  },
  reducers:{
    ProductURL: (state, action) => {
       const {data} = action.payload;
       state.productRender = data;
    }
  }
})

export const ProductRenderAction = ProductRenderSlice.actions;

export default ProductRenderSlice;