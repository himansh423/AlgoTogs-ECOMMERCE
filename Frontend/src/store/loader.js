import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    backImageLoad: true,
    cartSideLoad: true,
    heroCardLoad: true,
    shopsecLoad: true,
    textOnHeroLoad: true,
    loading: true,
  },
  reducers: {
    backimg: (state) => {
      state.backImageLoad = false;
      state.loading =
        state.cartSideLoad ||
        state.heroCardLoad ||
        state.shopsecLoad ||
        state.textOnHeroLoad;
    },
    cartside: (state) => {
      state.cartSideLoad = false;
      state.loading =
        state.backImageLoad ||
        state.heroCardLoad ||
        state.shopsecLoad ||
        state.textOnHeroLoad;
    },
    heroC: (state) => {
      state.heroCardLoad = false;
      state.loading =
        state.backImageLoad ||
        state.cartSideLoad ||
        state.shopsecLoad ||
        state.textOnHeroLoad;
    },
    shopSec: (state) => {
      state.shopsecLoad = false;
      state.loading =
        state.backImageLoad ||
        state.cartSideLoad ||
        state.heroCardLoad ||
        state.textOnHeroLoad;
    },
    txtHero: (state) => {
      state.textOnHeroLoad = false;
      state.loading =
        state.backImageLoad ||
        state.cartSideLoad ||
        state.heroCardLoad ||
        state.shopsecLoad;
    },
  },
});

export const loaderAction = loaderSlice.actions;
export default loaderSlice;