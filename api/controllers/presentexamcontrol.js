const express = require('express')
var router = express.Router()

var {presentexam}= require('../models/presentexam')
var { Student} = require('../models/student');

router.get('/',(req,res)=>{
    presentexam.find((err,docs)=>{
        if(!err)
        {
            res.send(docs)
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
}
)

router.get('/strength',(req,res)=>{
    Student.find((err,docs)=>{
        if(!err)
        {
            res.send(docs)
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
}
)


router.delete('/delete',(req,res)=>{
    presentexam.deleteMany((err,docs)=>{
        if(!err)
        {console.log("successs")
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
}
)


router.route('/insertpredata').post((req, res, next) => {
    presentexam.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(req.body)
        }
    })
});

  
module.exports = router;