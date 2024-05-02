import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/backcloth.jpeg";
const shopCardSlice = createSlice({
  name: "shopCards",
  initialState: {
    shopCards: [
      {
        id: "1",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "2",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "3",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "4",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "5",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "6",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "7",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "8",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "9",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
      {
        id: "10",
        img: img1,
        title: "branded shoes",
        for: "men",
        cutPrice: "120",
        originalPrice: "150",
      },
    ],
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
  },
});

export const shopCardAction = shopCardSlice.actions;
export default shopCardSlice;
