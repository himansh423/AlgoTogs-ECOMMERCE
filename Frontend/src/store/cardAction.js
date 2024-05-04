import {createSlice} from "@reduxjs/toolkit";


const cardActionSlice = createSlice({
  name:"cardAction",
  initialState: {styling:{transform:"translateX(0px)"}},
  reducers : {
    prevClick : (state) => {
      state.styling  = {transform:"translateX(0px)",
      transition: "transform 0.5s ease"}

    },
    nextClick :(state) => {
      state.styling  = {transform:"translateX(-850px)",
      transition: "transform 0.5s ease"}
    }
  }
})


export const cardAction = cardActionSlice.actions;
export default cardActionSlice;