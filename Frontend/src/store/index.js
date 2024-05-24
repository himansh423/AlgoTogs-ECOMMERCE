import { configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cards";
import cardActionSlice from "./cardAction";
import shopCardSlice from "./shopCard";
import subscribeToggleSlice from './subscribeToggle';
import landingPageSlice from "./landingPage";
import cartSlice from "./cart";
import sellerEverythingSlice from "./sellerEverything";
import loaderSlice from "./loader";
import productEverthingSlice from "./productEverything";
import filterEverythingSlice from "./filterEverything";
import SearchSlice from "./Search";
import ProductRenderSlice from "./ProductRender";

const eComStore = configureStore({
  reducer : {
    cards:cardSlice.reducer,
    cardAction:cardActionSlice.reducer,
    shopCard:shopCardSlice.reducer,
    subscribeToggle:subscribeToggleSlice.reducer,
    landingPage:landingPageSlice.reducer,
    cart:cartSlice.reducer,
    sellerEverything:sellerEverythingSlice.reducer,
    loader:loaderSlice.reducer,
    productEveryThing:productEverthingSlice.reducer,
    filterEverything:filterEverythingSlice.reducer,
    Search:SearchSlice.reducer,
    ProductRender:ProductRenderSlice.reducer,
  } 
})

export default eComStore;