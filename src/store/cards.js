import {createSlice} from "@reduxjs/toolkit";
import img1 from "../assets/backcloth.jpeg";

const cardSlice = createSlice({
  name:"card",
  initialState: {cardObj:[{
    id:"1",
    img:img1,
    para1:"20% Off On Tank Tops",
    para2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
  },
  {
    id:"2",
    img:img1,
    para1:"20% Off On Tank Tops",
    para2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
  },
  {
    id:"3",
    img:img1,
    para1:"20% Off On Tank Tops",
    para2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
  },
  {
    id:"3",
    img:img1,
    para1:"20% Off On Tank Tops",
    para2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
  }
  ,
  {
    id:"3",
    img:img1,
    para1:"20% Off On Tank Tops",
    para2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
  }]} 
})

export const cardActions = cardSlice.actions;

export default cardSlice;