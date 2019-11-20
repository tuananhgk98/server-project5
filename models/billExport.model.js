var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var billExport = new Schema({
    total : Number,
    idProduct : Array,
    createOn : String,
    isDone : Boolean
}, { collection: 'BillExport' });

module.exports = mongoose.model('BillExport', billExport);