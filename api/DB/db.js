const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dbUser:amreen@cluster0.ix4bk.mongodb.net/MITS?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })