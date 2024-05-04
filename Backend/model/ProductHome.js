const mongoose = require("mongoose");
const { Schema } = mongoose;


const ProductHomeSchema = new Schema({
  img : String,
  title:String,
  category :String,
  cuttedPrice : String,
  price: String,
});


exports.productHome = mongoose.model("ProductHome",ProductHomeSchema);