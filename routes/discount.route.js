var express = require('express');
var router = express.Router();
var discountCodeController = require('../controllers/discountCode.controller');
var cors = require('cors');
router.options('/', cors());


router.post('/find', discountCodeController.findCode);
router.get('/list', discountCodeController.getAllCode);
module.exports = router;
