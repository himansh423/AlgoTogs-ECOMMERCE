import { createSlice } from "@reduxjs/toolkit";
import img from "../assets/backcloth.jpeg";
const sellerEverythingSlice = createSlice({
  name:"sellerEverything",
  initialState:{
    product: [{
      img:img,
      title:"random Product",
      id:1,
      price:"2000",
    },
    {
      img:img,
      title:"random Product",
      id:1,
      price:"2000",
    },
    {
      img:img,
      title:"random Product",
      id:1,
      price:"2000",
    }]
  }
})

export const sellerEverythingAction = sellerEverythingSlice.actions;
export default sellerEverythingSlice;