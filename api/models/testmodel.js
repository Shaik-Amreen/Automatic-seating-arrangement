const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const testschema =new Schema({
    
        name: {type:String},
        age:{type:String}
},{ collection : 'tests' });
 

const test= mongoose.model('test',testschema)


module.exports = test;