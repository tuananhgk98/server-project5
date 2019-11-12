var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var billExport = new Schema({
    userEmail : String,
    total : Number,
    createOn : String
}, { collection: 'BillExport' });

module.exports = mongoose.model('BillExport', billExport);