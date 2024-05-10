const express = require('express');
const cartItemController = require('../controller/cartItem');
const router = express.Router();


router
.post('/',cartItemController.postCartItem)
.get('/',cartItemController.getCartItem)
.delete('/:id',cartItemController.deleteCartItem);



exports.router = router;