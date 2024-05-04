const express = require('express');
const productHomeController = require('../controller/productHome');
const router = express.Router();


router.get('/',productHomeController.getProductHome);


exports.router = router;