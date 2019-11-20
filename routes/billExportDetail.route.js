var express = require('express');
var router = express.Router();
var billExportDetailController = require('../controllers/billExportDetail.controller');
var cors = require('cors');
router.options('/', cors());


router.post('/create', billExportDetailController.createBill);
router.get('/:id', billExportDetailController.getBillDetailById);
router.post('/done/:id', billExportDetailController.doneOrder);

module.exports = router;