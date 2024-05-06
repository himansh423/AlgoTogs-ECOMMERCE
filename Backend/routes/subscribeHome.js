const express = require('express');
const subscribeHomeController = require('../controller/subscribeHome');
const router = express.Router();


router.post('/',subscribeHomeController.postSubscribeHome);


exports.router = router;