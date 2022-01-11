const express = require('express')
var router = express.Router()
const merge=require('deepmerge')
var { Student} = require('../models/student');
var {room} = require('../models/arooms')
var {unavailableroom} = require('../models/rooms')
var {admin} = require('../models/admin');
let data=[];
let arr=[];
let result=[];
let rooms=[];adm=[];
let k=0, m=0 ,i=0,j=0;
router.get('/student', (req, res) => {
  room.find((err,docs)=>{
    if(!err){
     arr.push(...docs);arr.sort();
unavailableroom.find((err, docs) => {
    if (!err) {rooms.push(...docs);
      admin.find((err, docs) => {
        if (!err) {adm.push(...docs);
      Student.find((err, docs) => {
        if (!err) {
          if(data.length===0){
          data.push(...docs);data.sort();
          console.log(data)
          var same =  data.filter(function(hero) {
            return hero.branch == "CSE" || hero.branch == "CST"; });
          var diff =  data.filter(function(hero) {
            return hero.branch == "ECE" || hero.branch == "MECHANICAL ENGINEERING"; });
            for( i=0;i<arr.length;i++){
            m=m+12;
              for( j=k;j<m;j++){
              let c=same[j];
              k++;
              let d=arr[i];
              const mer=merge(c._doc,d._doc)
             
              result.push(mer); }}
         m=0;k=0;
         for(i=0;i<arr.length;i++){
            m=m+12;
              for( j=k;j<m;j++){
              let e=diff[j];
              k=k+1;
              let f=arr[i];
              const mer=merge(e._doc,f._doc);
              result.push(mer);
            ;
            
          }}} res.send(result)}
    else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
      })}
      else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })}
    else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
  })}
    else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))})
  });

module.exports = router;