var billExportDetail = require('../models/bill.ExportDetail.model');
var mongoose = require('mongoose');


mongoose.createConnection('mongodb://localhost:27017/project5');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports.createBill = function (req, res) {
    let data = {
        "idBillExport" : req.body.idBillExport,
        "userOrderName" : req.body.userOrderName,
        "product" : req.body.product,
        "total" : req.body.total,
        "description" : req.body.description,
        "phone" : req.body.phone,
        "createOn" : req.body.createOn,
        "isDone" : false
    };
    billExportDetail.create(data).then(data => {
        res.status(200).send({
            OK: true,
            Message: 'create successfully!!',
            data: data
        });
    }).catch(err => res.status(500).send({
        OK: false,
        Message: 'error',
        data: JSON.stringify(err)
    }));
};


module.exports.getBillDetailById = function (req, res) {
    billExportDetail.findOne({ idBillExport: req.params.id }, function (err, data) {
        if (err) res.send(json(err));
        res.status(200).send({
            OK: true,
            Message: "get one product successfully!",
            data: data
        });
    });

};
module.exports.doneOrder = function (req, res) {

    let data = {
        "isDone": true
    };

    billExportDetail.updateOne({ _id: req.params.id }, data, { new: false }).then(pro => {

        res.status(200).send({
            OK: true,
            Message: "Update successfuly!!",
            data: pro
        });

    });


};