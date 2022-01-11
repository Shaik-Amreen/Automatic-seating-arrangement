const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const academicsschema =new Schema({
   
    regulation:{type:String},
    year:{type:String},
    branch:{type:String}, 
    coursecode:{type:String},
    coursename:{type:String}
      
},{ collection : 'academics' });
 

const academic= mongoose.model('academics',academicsschema)


module.exports = {academic};