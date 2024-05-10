const mongoose = require("mongoose");
const { Schema } = mongoose;


const ProductHomeSchema = new Schema({
  img : String,
  title:String,
  category :String,
  cuttedPrice : Number,
  price: Number,
});


exports.productHome = mongoose.model("ProductHome",ProductHomeSchema);