const express = require('express')
var router = express.Router()

var {user}= require('../models/users')


router.get('/',(req,res)=>{
    user.find((err,docs)=>{
        if(!err)
        {   
            res.send(...docs)
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
}
)

  
module.exports = router;