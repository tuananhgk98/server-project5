var billExport = require('../models/billExport.model');
var mongoose = require('mongoose');


mongoose.createConnection('mongodb://localhost:27017/project5');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports.getAllBill = function (req, res) {
    billExport.find(function (err, data) {
        if (err) return console.log(err);
        res.status(200).send({
            OK: true,
            Message: "Get all bill export successfully!!",
            data: data
        });
    });
};



module.exports.createBill = function (req, res) {
    let data = {
        "total": req.body.total,
        "idProduct" : req.body.idProduct,
        "createOn": req.body.createOn,
        "isDone": false
    };
    billExport.create(data).then(data => {
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


module.exports.doneOrder = function (req, res) {

    let data = {
        "isDone": true
    };

    billExport.updateOne({ _id: req.params.id }, data, { new: false }).then(pro => {

        res.status(200).send({
            OK: true,
            Message: "Update successfuly!!",
            data: pro
        });

    });


};
