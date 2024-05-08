import {createSlice} from "@reduxjs/toolkit";


const cardSlice = createSlice({
  name:"card",
  initialState: {cardObj:[]}, 
  reducers: {
    cardContent: (state,action) => {
      const {data} = action.payload;
      state.cardObj = data;
    }
  }
})

export const cardActions = cardSlice.actions;

export default cardSlice;