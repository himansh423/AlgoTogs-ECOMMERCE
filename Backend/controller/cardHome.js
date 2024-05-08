const mongoose = require('mongoose');
const model = require('../model/cardHome');
const cardHome = model.cardHome;

exports.getCards = async (req,res) => {
    const cardsHome = await cardHome.find();
    res.json(cardsHome);
}
