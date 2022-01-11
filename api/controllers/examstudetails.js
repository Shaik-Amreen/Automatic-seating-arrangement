const express = require('express')
var router = express.Router()

var {examstudentdetail}= require('../models/examstudentdetails')


router.get('/',(req,res)=>{
    examstudentdetail.find((err,docs)=>{
        if(!err)
        {
            res.send(docs)
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
}
)

router.route('/insertexams').post((req, res, next) => {
    examstudentdetail.find((err,docs)=>{
        if(!err)
        {   
            if(docs.length===0){
                examstudentdetail.create(req.body, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        res.json(req.body)
                    }
                })
            }
            else{
               var k=1;
               req.body.map(e=>{k++;
     let check=docs.filter(er=>
               e.examcode+e.year+e.sem+e.examdepartment+e.examregulation===er.examcode+er.year+er.sem+er.examdepartment+er.examregulation)
            if(check.length===0){
                examstudentdetail.create(e, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        if(k===req.body.length){
        
                            res.send('1')
                        }
                    }
                })
            }
            else{
            examstudentdetail.updateOne({year:e.year,examcode:e.examcode,sem:e.sem,examdepartment:e.examdepartment,examregulation:e.examregulation},
            {$set: {examdate:e.examdate}},function(err, res){
                if(!err)
                {}
                else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
            })
            if(k===req.body.length){
                res.send('1')
            }
       
          
            }
        })
        }
    }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
});
  
 
module.exports = router;