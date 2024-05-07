const mongoose = require('mongoose');
const model = require('../model/subscribeHome');
const subscribeHome = model.subscribeHome;

exports.postSubscribeHome = async (req, res) => {
  try {
    const subUser = new subscribeHome(req.body);
    const savedUser = await subUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getSubscribeHome = async (req, res) => {
  try {
    const subUser = await subscribeHome.find();
    res.json(subUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getSubscribeHomeONE = async (req, res) => {
  try {
    let email = req.params.email;
    const subUser = await subscribeHome.findOne({email:email});
    res.json(subUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

