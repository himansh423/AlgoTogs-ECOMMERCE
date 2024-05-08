const express = require('express');
const cardHomeController = require('../controller/cardHome');
const router = express.Router();


router.get('/',cardHomeController.getCards);


exports.router = router;