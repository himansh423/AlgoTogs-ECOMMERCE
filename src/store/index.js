import { configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cards";
import cardActionSlice from "./cardAction";

const eComStore = configureStore({
  reducer : {
    cards:cardSlice.reducer,
    cardAction:cardActionSlice.reducer,
  } 
})

export default eComStore;