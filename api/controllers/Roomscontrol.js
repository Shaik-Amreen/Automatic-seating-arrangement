const express = require('express')
var router = express.Router()

var {room}= require('../models/room')


router.get('/',(req,res)=>{
    room.find((err,docs)=>{
        if(!err)
        {
            res.send(docs)
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
}
)

router.post('/delete',(req,res)=>{
    room.deleteMany((err,docs)=>{
        console.log(docs)
        if(!err)
        {console.log("successsroomssssssss")
          res.send('removeeeddddddddddddddd')
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
}
)

router.route('/insertrooms').post((req, res, next) => {
    room.insertMany(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(req.body)
        }
    })
});

  
module.exports = router;