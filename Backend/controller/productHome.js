const mongoose = require('mongoose');
const model = require('../model/ProductHome');
const productHome = model.productHome;

exports.getProductHome = async (req, res) => {
  const title = req.query.products;
  if (req.query.products) {
    try {
      const product = await productHome.find({ title: title }).exec();
      res.json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    try {
      const productsHome = await productHome.find();
      res.json(productsHome);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

exports.getProductHomeOne = async (req, res) => {
  const id = req.params.id;
  try {
    const productsHome = await productHome.findById(id);
    res.json(productsHome);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};