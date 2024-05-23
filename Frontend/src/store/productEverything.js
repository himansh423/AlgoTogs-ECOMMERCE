import { createSlice } from "@reduxjs/toolkit";

const productEverythingSlice = createSlice({
  name: "productEverything",
  initialState: {
    ProductEvery: [],
    style: {},
    resultInitial: 1,
    resultEnd: 12,
    totalResult: 0,
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
    everythingData: (state, action) => {
      const { data } = action.payload;
      state.ProductEvery = data;
    },
    totalResult: (state, action) => {
      const { total } = action.payload;
      state.totalResult = total;
    },
    resultChange: (state, action) => {
      const { resultInitial, resultEnd } = action.payload;
      state.resultInitial = resultInitial;
      state.resultEnd = resultEnd;
    },
  },
});

export const productEverthingAction = productEverythingSlice.actions;
export default productEverythingSlice;