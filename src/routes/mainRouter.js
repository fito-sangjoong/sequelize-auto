const express = require('express');
const mainController = require('../controller/mainController');

const router = express.Router();

router.get('/', mainController.test);

module.exports = router;