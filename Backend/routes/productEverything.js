const express = require("express");
const productEverythingController = require("../controller/productEverything");
const router = express.Router();

router
  .get("/filteredProducts", productEverythingController.getFilteredProducts) 
  .get("/:id", productEverythingController.getProductEverythingOne) 
  .get("/", productEverythingController.getProductEverything) 
  .post("/", productEverythingController.postProductEverything);

exports.router = router;
