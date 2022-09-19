const express = require('express');
const app = express()
require('./db')
const students = require('./studentmodel')

app.use('/getdata',(req,res)=>{
    students.find({rollno:req.rollno,sem:req.sem},(data,err)=>{
        err?console.log(err):
        res.send(data);
    })
})

app.listen(8080,console.log("server connected"))