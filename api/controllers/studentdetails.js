const express = require('express')
var router = express.Router()

var {Student}= require('../models/student')






router.put('/updatea',(req,res)=>{
    Student.updateMany({year:"1"},{$set: {year:req.body.year}},function(err, res){
        if(!err)
        {
          console.log("successsroomssssssss")
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})

router.put('/updateb',(req,res)=>{
    Student.updateMany({year:"2"},{$set: {year:req.body.year}},function(err, res){
        if(!err)
        {
          console.log("successsroomssssssss")
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})


router.put('/updatec',(req,res)=>{
    Student.updateMany({year:"3"},{$set: {year:req.body.year}},function(err, res){
        if(!err)
        {
          console.log("successsroomssssssss")
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})


router.put('/updated',(req,res)=>{
    Student.updateMany({year:"4"},{$set: {year:req.body.year}},function(err, res){
        if(!err)
        {
          console.log("successsroomssssssss")
        }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})








router.route('/insertdata').post((req, res, next) => {
    Student.find((err,docs)=>{
        if(!err)
        {   
            if(docs.length===0){
                Student.create(req.body, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        res.json(req.body)
                    }
                })
            }else{ var k=1;

            req.body.map(e=>{
                console.log(k)
                let check=docs.filter(er=>er.rollno===e.rollno)
                console.log(e.rollno)
                console.log(check.length)
                if(check.length===0){
                    console.log('hyyyyyyyyyyyyyyyyyystuuu')
                    Student.create(e, (error, data) => {
                        if (error) {
                            return next(error)
                        } else {
                            if(k===req.body.length){
        
                                res.send('1')
                            }
                        }
                    })
                }

                else          
                 {
            Student.updateOne({rollno:e.rollno},{$set: {name:e.name}},function(err, res){
                if(!err)
                {}
                else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
            })
            if(k===req.body.length){res.send('1')}
        
            }


            k++;

            })
           
          
        }
    }
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })

});
 
module.exports = router;