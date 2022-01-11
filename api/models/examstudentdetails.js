const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const examstudentdetailschema =new Schema({
    examdate:{type:Date},
    examsession:{type:String},
    examname:{type:String}, 
    examcode:{type:String},
    examregulation:{type:String},
    examdepartment:{type:String},
    year:{type:String},
    sem:{type:String}
      
});
 

const examstudentdetail= mongoose.model('examstudentdetail',examstudentdetailschema,'examstudentdetail')


module.exports = {examstudentdetail};