const express = require('express');
const landingPageController = require('../controller/landingPage');
const router = express.Router();


router.get('/',landingPageController.getLandingPage);

exports.router = router;