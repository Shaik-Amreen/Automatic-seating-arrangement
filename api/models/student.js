var mongo = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Studentschema =new Schema({
    
        name: {type:String},
       rollno : {type:String},
      branch: {type:String},
        year : {type:String},
},{ collection : 'Students' });
 

const Student= mongoose.model('Student',Studentschema)


module.exports = {Student};