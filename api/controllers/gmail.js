const express = require('express')
var router = express.Router()
const nodemailer = require('nodemailer');


router.post('/',(req,res)=>{
    console.log(req.body)
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kousaramreen73@gmail.com',
            pass: 'amreen@123'
        }
    });
      
    let mailDetails = {
        from: 'kousaramreen73@gmail.com',
        to: `${req.body.rollno}@mits.ac.in`,
        subject: 'Test mail',
        text: `test for room no ${req.body.roomno}`
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs',err);
        } else {
            res.send(req.body)
            console.log('Email sent successfully');
        }
    });


}
)

module.exports=router;