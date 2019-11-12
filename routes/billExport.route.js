var express = require('express');
var router = express.Router();
var billExportController = require('../controllers/billExport.controller');
var cors = require('cors');
router.options('/', cors());


router.post('/create', billExportController.createBill);
router.get('/getAllBill', billExportController.getAllBill);
module.exports = router;