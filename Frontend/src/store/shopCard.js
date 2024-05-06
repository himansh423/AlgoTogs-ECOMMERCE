import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/backcloth.jpeg";
const shopCardSlice = createSlice({
  name: "shopCards",
  initialState: {
    shopCards: [],
    style: {
      visibility: "hidden",
      transition: "visibility 0.9s ease",
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
    shopCardData: (state, action) => {
      const { data } = action.payload;
      state.shopCards = data;
    },
  },
});

export const shopCardAction = shopCardSlice.actions;
export default shopCardSlice;
