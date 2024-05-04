const mongoose = require('mongoose');
const model = require('../model/ProductHome');
const productHome = model.productHome;


exports.getProductHome = async (req,res) => {
  const productsHome = await productHome.find();
  res.json(productsHome);
}
