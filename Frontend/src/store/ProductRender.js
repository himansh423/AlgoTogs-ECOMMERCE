import { createSlice } from "@reduxjs/toolkit";

const ProductRenderSlice = createSlice({
  name:"ProductRender",
  initialState:{
    productRender:[]
  },
  reducers:{
    ProductClicked: (state,action) => {
      const {data} = action.payload;
      state.productRender = data;
      state.productRender = state.productRender.filter((item) => item.title !== data.title); 
    }
  }
})

export const ProductRenderAction = ProductRenderSlice.actions;

export default ProductRenderSlice;