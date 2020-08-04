const express = require('express')
var router = express.Router()
const merge=require('deepmerge')
var { Student} = require('../models/student');
var {room} = require('../models/arooms')
var {unavailableroom} = require('../models/rooms')
let data=[];
let arr=[];
let result=[];
let rooms=[];
let k=0, m=0 ,i=0,j=0;
router.get('/', (req, res) => {
  room.find((err,docs)=>{
    if(!err){
     arr.push(...docs);
  
unavailableroom.find((err, docs) => {
    if (!err) {rooms.push(...docs)
      Student.find((err, docs) => {
        if (!err) {
          var datetime = new Date();
    console.log(datetime);
          if(data.length===0){
          data.push(...docs)
          var same =  data.filter(function(hero) {
            return hero.branch == "CSE" || hero.branch == "CST"; });
          var diff =  data.filter(function(hero) {
            return hero.branch == "ECE" || hero.branch == "MECHANICAL ENGINEERING"; });
            for( i=0;i<arr.length;i++){
            m=m+12;
              for( j=k;j<m;j++){
              let a=same[j];
              k++;
              let b=arr[i];
              const mer=merge(a._doc,b._doc)
             
              result.push(mer); }}
         m=0;k=0;
         for(i=0;i<arr.length;i++){
            m=m+12;
              for( j=k;j<m;j++){
              let a=diff[j];
              k=k+1;
              let b=arr[i];
              const mer=merge(a._doc,b._doc);
              result.push(mer);
            ;
            
          }}} res.send(result)}
    else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
      })}
      else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })}
    else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))})
  });

module.exports = router;