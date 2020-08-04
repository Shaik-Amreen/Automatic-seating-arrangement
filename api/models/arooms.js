var mongo = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const roomS=new Schema({
    roomno: {type:String},
 },{ collection : 'rooms' })
const room=
 mongoose.model('room',roomS);
 module.exports = {room};


 