const mongoose = require("mongoose");
const { Schema } = mongoose;


const ProductEverythingSchema = new Schema({
  img : String,
  title:String,
  category :String,
  cuttedPrice : Number,
  price: Number,
});


exports.productEverything = mongoose.model("productEverything",ProductEverythingSchema);