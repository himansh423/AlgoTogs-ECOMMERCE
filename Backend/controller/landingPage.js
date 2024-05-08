const mongoose = require('mongoose');
const model = require('../model/landingPage');
const landingPage = model.landingPage;

exports.getLandingPage = async (req,res) => {
  const landingsPage = await landingPage.find();
  res.json(landingsPage);
}