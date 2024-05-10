const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartItemSchema = new Schema({
  _id:String,
  img: String,
  title: String,
  quantity: Number,
  cuttedPrice: Number,
  price: Number,
});

exports.cartItem = mongoose.model("cartItem", cartItemSchema);
