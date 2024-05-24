import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name:"search",
  initialState:{
    searchItem:[],
  },
  reducers: {
    searchResult: (state,action) => {
      const {data} = action.payload;
      state.searchItem = data;
    },
    searchEmpty:(state,action) => {
        state.searchItem = [];
    }
  }
})


export const SearchAction = SearchSlice.actions;

export default SearchSlice;