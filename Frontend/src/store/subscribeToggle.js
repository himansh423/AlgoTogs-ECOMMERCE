import {createSlice} from "@reduxjs/toolkit";


const subscribeToggleSlice = createSlice({
  name:"subscribeToggle",
  initialState: {toggle: false,
    loaderToggle:{}
  },
  reducers: {
     toggled: (state,action) => {
        state.toggle = true;
     },
     styleToggle : (state,action) => {
       state.loaderToggle = {opacity: "0.5"}
     },
     styleToggle2 : (state,action) => {
      state.loaderToggle = {opacity: "1"}
    }
  }
})

export const subscribeToggleAction = subscribeToggleSlice.actions;

export default subscribeToggleSlice;