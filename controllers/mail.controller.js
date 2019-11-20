/*jshint esversion: 6 */
var nodemailer = require('nodemailer');

const option = {
    service: 'gmail',
    auth: {
        user: 'testnodemailer101161@gmail.com',
        pass: 'test@123456'
    }
};
var transporter = nodemailer.createTransport(option);
transporter.verify(function (error, success) {

    if (error) {
        console.log(error);
    } else {
        console.log('Kết nối thành công!');
    }
});

module.exports.sendSubscribeEmail = function (req, res) {
    var email = req.body.mail;
    var subject = req.body.subject;
    var mailContent = {
        from: 'testnodemailer101161@gmail.com',
        to: `${email}`,
        subject: `Welcome`,
        text: `${subject}`,
        html: `<h1>${subject}</h1>`
    };
    transporter.sendMail(mailContent, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({
                OK: true,
                Message: "send mail successfully!!",
                data: info
            });
        }
    });
};