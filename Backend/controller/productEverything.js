const mongoose = require('mongoose');
const model = require('../model/productEverything');
const productEverything = model.productEverything;

exports.getProductEverything = async (req, res) => {
  let query = productEverything.find();
  let pageSize = 12; 
  let page = req.query.page || 1; 

  if (req.query.sort) {
    const products = await query
      .sort({ [req.query.sort]: req.query.order })
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .exec();
    res.json(products);
  } else {
    const products = await query
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .exec();
    res.json(products);
  }
};

exports.getFilteredProducts = async (req, res) => {
  let query = productEverything.find();
  let pageSize = 12;
  let page = req.query.page || 1;

  const minPrice = req.query.min ? Number(req.query.min) : 0;
  const maxPrice = req.query.max ? Number(req.query.max) : 240;


  query = query.where('price').gte(minPrice).lte(maxPrice);

  if (req.query.sort) {
    const products = await query
      .sort({ [req.query.sort]: req.query.order })
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .exec();
    res.json(products);
  } else {
    const products = await query
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .exec();
    res.json(products);
  }
};

exports.getProductEverythingOne = async (req, res) => {
  const id = req.params.id;
  const productsEverything = await productEverything.findById(id);
  res.json(productsEverything);
};

exports.postProductEverything = async (req, res) => {
  try {
    const everyProduct = new productEverything(req.body);
    const savedEveryProduct = await everyProduct.save();
    res.status(201).json(savedEveryProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};