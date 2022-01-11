module.exports = function(app) {
  
    const test = require('../controllers/testcontrol');
     
    // Create a new test
    app.post('/student', test.createhello);
  
    app.get('/testdata',test.alldata)
    
   

}