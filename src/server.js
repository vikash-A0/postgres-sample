const express = require("express");
const sequelize = require('./database/db')
const User = require('./models/user')
const cookieParser = require('cookie-parser')
const Joi = require('joi')


var app = express();

app.use(express.json());
app.use(cookieParser())


app.use('/users',require('./routes/user'));
app.use('/performance',require('./routes/performance'));



(async () =>{
    try{
        await sequelize.sync({
            force : false
        });
        console.log('DB Connected Succesfully')
        app.listen(2000,()=>{
            console.log("Server Started")
        });
    }
    catch(e){
        console.log('An error occured',e);
    }
})()