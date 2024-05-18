import { createSlice } from "@reduxjs/toolkit";


const filterEverythingSlice = createSlice({
  name:"filterEverything",
  initialState:{
    min:20,
    max:240,
  },
  reducers:{
    minFilter: (state,action) => {
      const {minRange} = action.payload;
      state.min = minRange;
    },
    maxFilter: (state,action) => {
      const {maxRange} = action.payload;
      state.max = maxRange;
    }
  }
})


export const filterEverythingActions = filterEverythingSlice.actions;

export default filterEverythingSlice;