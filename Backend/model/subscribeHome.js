const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscribeHomeSchema = new Schema({
  email: { 
    type: String, 
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
});

exports.subscribeHome = mongoose.model("subscribeHome", subscribeHomeSchema);
