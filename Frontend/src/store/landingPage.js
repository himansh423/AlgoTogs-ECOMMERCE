import { createSlice } from "@reduxjs/toolkit";

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState: {
    text: {},
  },
  reducers: {
    textHero: (state, action) => {
      const {data} = action.payload;
      state.text = data;
     
    },
 
}});
export const landingPageAction = landingPageSlice.actions;

export default landingPageSlice;
