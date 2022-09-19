const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://placement:placement@cluster0.i5cpa.mongodb.net/studentsresults?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, useUnifiedTopology: true, //make this true
    autoIndex: true
  }).then((result) => {
    console.log('Mongodb connection succeeded ')
  }).catch((err) => {
    console.log('error while connecting Mongodb' + err)
  })