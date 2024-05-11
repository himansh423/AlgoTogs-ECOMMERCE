const mongoose = require("mongoose");
const model = require("../model/cartItem");
const cartItem = model.cartItem;

exports.postCartItem = async (req, res) => {
  try {
    const cartIt = new cartItem(req.body);
    const savedcartItem = await cartIt.save();
    res.status(201).json(savedcartItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getCartItem = async (req,res) => {
  try{
    const cartIt = await cartItem.find();
    res.json(cartIt);
  }
  catch(err) {
    res.status(400).json({error:err.message});
  }
}
exports.getCartItemOne = async (req,res) => {
  try{
    id = req.params.id
    const cartIt = await cartItem.findById(id);
    res.json(cartIt);
  }
  catch(err) {
    res.status(400).json({error:err.message});
  }
}

exports.deleteCartItem = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await cartItem.findOneAndDelete({_id:id})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
}

exports.updateCartItem = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await cartItem.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};

