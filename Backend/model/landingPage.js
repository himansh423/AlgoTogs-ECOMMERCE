const mongoose = require("mongoose");
const { Schema } = mongoose;

const landingPageSchema = new Schema({
  img: String,
  para: String,
  discount: String,
});

exports.landingPage = mongoose.model('landingPage',landingPageSchema);