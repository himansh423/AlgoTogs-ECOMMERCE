import { configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cards";
import cardActionSlice from "./cardAction";
import shopCardSlice from "./shopCard";
import subscribeToggleSlice from './subscribeToggle';

const eComStore = configureStore({
  reducer : {
    cards:cardSlice.reducer,
    cardAction:cardActionSlice.reducer,
    shopCard:shopCardSlice.reducer,
    subscribeToggle:subscribeToggleSlice.reducer,
  } 
})

export default eComStore;