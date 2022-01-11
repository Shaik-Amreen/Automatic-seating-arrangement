var mongo = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const roomS=new Schema({
    date: {type:Date},
    session:{type:String}
 },{ collection : 'presentexams' })
const presentexam=
 mongoose.model('presentexam',roomS);
 module.exports = {presentexam};


 