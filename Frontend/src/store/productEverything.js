import { createSlice } from "@reduxjs/toolkit";


const productEverthingSlice = createSlice({
  name:"productEverything",
  initialState:{
    ProductEvery:[],
    style: {
      visibility: "hidden",
      transition: "visibility 0.9s ease",
      resultInitial:1,
      resultEnd:12,
    },
  },
  reducers: {
    stylingOver: (state, action) => {
      const { cardId } = action.payload;
      state.style = {
        ...state.style,
        [cardId]: {
          visibility: "visible",
          transition: "visibility 0.9s ease",
        },
      };
    },
    stylingLeave: (state, action) => {
      const { cardId } = action.payload;
      state.style = {
        ...state.style,
        [cardId]: {
          visibility: "hidden",
        },
      };
    },
    everythingData: (state,action) => {
      const {data} = action.payload;
      state.ProductEvery = data;
    },
    resultChange: (state,action) => {
      const {page} = action.payload;
      if(page === 1){
        state.resultInitial = 1;
        state.resultEnd = 12;
      }
      else if(page === 2){
        state.resultInitial = 13;
        state.resultEnd = 24;
      }
      else if(page === 3){
        state.resultInitial = 25;
        state.resultEnd = 31;
      }
    }

  }
})


export const productEverthingAction = productEverthingSlice.actions;
export default productEverthingSlice;