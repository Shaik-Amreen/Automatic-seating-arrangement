require('./DB/db');
const express = require('express');
var app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var stu= require('./controllers/studentdatacontrol');
var examstudetails=require('./controllers/examstudetails')
var users=require('./controllers/users');
var presentexam=require('./controllers/presentexamcontrol')
var rooms=require('./controllers/Roomscontrol');
var studentdetails=require('./controllers/studentdetails')
var gmail =require('./controllers/gmail')



app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.listen(4000,()=>console.log('Server started at : 4000'));

app.use('/stu',stu);
app.use('/exam',examstudetails)
app.use('/users',users);
app.use('/presentexam',presentexam);
app.use('/student',studentdetails)
app.use('/rooms',rooms);
app.use('/gmail',gmail);
