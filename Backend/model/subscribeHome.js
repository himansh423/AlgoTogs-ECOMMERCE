const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscribeHomeSchema = new Schema({
  email:String,
});

exports.subscribeHome = mongoose.model("subscribeHome",subscribeHomeSchema);