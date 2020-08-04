var mongo = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const roomS=new Schema({
    roomno: {type:String},
 },{ collection : 'unavailablerooms' })
const unavailableroom=
 mongoose.model('unavailableroom',roomS);
 module.exports = {unavailableroom};


 