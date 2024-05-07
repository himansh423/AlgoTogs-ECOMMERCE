const express = require('express');
const subscribeHomeController = require('../controller/subscribeHome');
const router = express.Router();


router
.post('/',subscribeHomeController.postSubscribeHome)
.get('/',subscribeHomeController.getSubscribeHome)
.get('/:email',subscribeHomeController.getSubscribeHomeONE);


exports.router = router;