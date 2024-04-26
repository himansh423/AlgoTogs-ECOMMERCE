import { configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cards";

const eComStore = configureStore({
  reducer : {
    cards:cardSlice.reducer,
  } 
})

export default eComStore;