var test = require('../models/testmodel');
const express = require('express')
var router = express.Router()




router.route('/insertrooms').post((req, res, next) => {
    room.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});


module.exports=router;