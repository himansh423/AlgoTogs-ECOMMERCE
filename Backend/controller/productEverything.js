const mongoose = require("mongoose");
const model = require("../model/productEverything");
const productEverything = model.productEverything;

exports.getProductEverything = async (req, res) => {
  let query = productEverything.find();
  let pageSize = 12;
  const title = req.query.producttitle;
  let page = req.query.page || 1;
  const input = req.query.products;
  if(req.query.products){
    try {
      const products = await productEverything.find({ title: { $regex: `^${input}`, $options: 'i' } }).exec();
      const totalCount = products.length;
  
      res.json({ products, totalCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
  }
  else if (req.query.producttitle) {
    try {
      const product = await productEverything.find({ title: title }).exec();
      res.json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
 
  else if (req.query.sort) {
    const sortField =
      req.query.sort === "PriceLH"
        ? "price"
        : req.query.sort === "PriceHL"
        ? "-price"
        : null;
    if (sortField) {
      const totalCount = await productEverything.countDocuments().exec();
      const products = await query
        .sort(sortField)
        .skip(pageSize * (page - 1))
        .limit(pageSize)
        .exec();
      res.json({ products, totalCount });
    } else {
      const totalCount = await productEverything.countDocuments().exec();
      const products = await query
        .skip(pageSize * (page - 1))
        .limit(pageSize)
        .exec();
      res.json({ products, totalCount });
    }
  } else {
    const totalCount = await productEverything.countDocuments().exec();
    const products = await query
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .exec();
    res.json({ products, totalCount });
  }
};



exports.getFilteredProducts = async (req, res) => {
  let query = productEverything.find();
  let pageSize = 12;
  let page = req.query.page || 1;
  const minPrice = req.query.min ? Number(req.query.min) : 0;
  const maxPrice = req.query.max ? Number(req.query.max) : 240;

  query = query.where("price").gte(minPrice).lte(maxPrice);

  if (req.query.sort) {
    const sortField =
      req.query.sort === "PriceLH"
        ? "price"
        : req.query.sort === "PriceHL"
        ? "-price"
        : null;
    if (sortField) {
      const products = await query
        .sort(sortField)
        .skip(pageSize * (page - 1))
        .limit(pageSize)
        .exec();
      const totalCount = products.length;
      res.json({ products, totalCount });
    } else {
      const products = await query
        .skip(pageSize * (page - 1))
        .limit(pageSize)
        .exec();
      const totalCount = products.length;
      res.json({ products, totalCount });
    }
  } else {
    const products = await query
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .exec();
    const totalCount = products.length;
    res.json({ products, totalCount });
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


exports.getProductEverythingStartWith = async (req,res) => {
  const input = req.query.product;

  try {
    const products = await productEverything.find({ title: { $regex: `^${input}`, $options: 'i' } }).exec();
    const totalCount = products.length;

    res.json({ products, totalCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}