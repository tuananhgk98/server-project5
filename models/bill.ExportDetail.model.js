var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var billExportDetail = new Schema({
    idBillExport : String,
    userOrderName : String,
    product : Array,
    total : Number,
    description : String,
    phone : Number,
    createOn : String,
    isDone : Boolean
}, { collection: 'BillExportDetail' });

module.exports = mongoose.model('BillExportDetail', billExportDetail);