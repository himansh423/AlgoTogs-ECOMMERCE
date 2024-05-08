const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardHomeSchema = new Schema({
  img: String,
  title: String,
  description: String,
});

exports.cardHome = mongoose.model("cardHome",cardHomeSchema);
