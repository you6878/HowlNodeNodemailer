/**
 * Created by myeongsic on 2017. 7. 5..
 */
'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    //host: 'smtp.example.com',
    //port: 465,
    //secure: true, // secure:true for port 465, secure:false for port 587
    service:'Gmail',
    auth: {
        user: 'myeongsic89',
        pass: 'yyjksdicewpclhrm'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"하울" <myeongsic89@gmail.com>', // sender address
    to: 'you6878@icloud.com', // list of receivers
    subject: '안녕하세요', // Subject line
    text: '하울의 코딩채널에 오신것을 환영합니다', // plain text body
    //html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});