const express = require('express')
var router = express.Router()
const merge=require('deepmerge')
var { Student} = require('../models/student');
var {room} = require('../models/room')
var {presentexam} = require('../models/presentexam')
var {examstudentdetail} = require('../models/examstudentdetails');
let data,arr,result,preexam,exam,dept1,dept2;
let k,m,i,j;
router.get('/', (req, res) => {
    dept1=[],dept2=[],arr=[],result=[],exam=[],data=[],preexam=[],k=0,m=0,i=0,j=0;
  //find rooms
      room.find((err,docs)=>{
           if(!err){
              arr.push(...docs);arr.sort((a, b) => (a.roomno > b.roomno) ? 1 : -1)
  //find todays exam
      presentexam.find((err, docs) => {
            if (!err) {preexam.push(...docs);
  //find exam details
      examstudentdetail.find((err, docs) => {
             if (!err) {exam.push(...docs);let ex=preexam[preexam.length-1];
              exam=exam.filter(e=> e.examdate.getFullYear()+e.examdate.getMonth()+e.examdate.getDate()+e.examsession===
              ex.date.getFullYear()+ex.date.getMonth()+ex.date.getDate()+ex.session);
              exam.map((e)=>(exam[0].examname===e.examname && exam[0].examregulation===e.examregulation && exam[0].year===e.year)?
              dept1.push({"exam":e.examname,"reg":e.examregulation,"dept":e.examdepartment,"year":e.year}):dept2.push({"exam":e.examname,"reg":e.examregulation,"dept":e.examdepartment,"year":e.year}))
              dept1=[...new Set(dept1)],dept2=[...new Set(dept2)]
  //find student data
      Student.find((err, docs) =>{
             if (!err) {
                   if(data.length===0){
                       data.push(...docs);data.sort((a, b) => (a.rollno > b.rollno) ? 1 : -1);data=[...new Set(data)]
                  var same=[],diff=[];
                   dept1.map(e=>(data.map(ed=>{if(e.dept===(ed.branch)){var s=merge(e,ed._doc);same.push(s)}})));
                   dept2.map(e=>(data.map(ed=>{if(e.dept===(ed.branch)){var d=merge(e,ed._doc);diff.push(d)}})));
                         for( i=0;i<arr.length;i++){
                             m=m+12;
                             if(m>same.length && m-same.length<12){m=same.length;}
                             for( j=k;j<m;j++){
                                if(m<=same.length){
                                let c=same[j];
                             k++;
                             let d=arr[i];
                             const mer=merge(c,d._doc);
                             result.push(mer);
                            }}}

                       m=0;k=0;

                          for(i=0;i<arr.length;i++){
                             
                               m=m+12;
                               if(m>diff.length && m-diff.length<12){m=diff.length}
                              for( j=k;j<m;j++){
                                if(m<=diff.length){
                                 let e=diff[j];
                              k++;
                              let f=arr[i];
                              const mer=merge(e,f._doc);
                              result.push(mer);
                  }}}}
                 res.send(result)
                    }
              else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
                 })}
              else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
                   })}
              else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
                      })}
              else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))})
               });

module.exports = router;