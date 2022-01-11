var mongo = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userschema =new Schema({
    username:{type:String},
    password:{type:String}, 
    type:{type:String},
    
},{ collection : 'users' });
 

const user= mongoose.model('user',userschema)


module.exports = {user};