const mongoose = require("mongoose");
const model = require("../model/productEverything");
const productEverything = model.productEverything;

exports.getProductEverything = async (req, res) => {
  let query = productEverything.find();
  let pageSize = 12;
  let page = req.query.page || 1;

  // Check if the sort query parameter is provided
  if (req.query.sort) {
    // If sort parameter is present, sort the products based on the provided field and order
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

  // Filter products based on the provided min and max price
  query = query.where("price").gte(minPrice).lte(maxPrice);

  // Check if the sort query parameter is provided
  if (req.query.sort) {
    // If sort parameter is present, sort the products based on the provided field and order
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
