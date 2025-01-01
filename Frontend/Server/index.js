const express=require('express');
const mongoose = require('mongoose');
const cors =require('cors')
const InnovatorsModel = require('./model/Innovators')
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/aac");

app.post('/Pages/Login/Login',async(req,res) => {

    const{Username,password}=req.body;
    InnovatorsModel.findOne({Username: Username})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })

})

app.post('/Pages/Registration/Signup',async(req,res)=>{
    InnovatorsModel.create(req.body)
    .then(innovators => res.json(innovators))
    .catch(err => res.json(err))
})

app.listen(3001,() =>{
    console.log('server is connected')
    console.log('Database Connected')
})