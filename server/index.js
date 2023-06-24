const express = require('express');
const routes = require('./Routes/route')
const cors =require('cors')
const bodyParser = require('body-parser')
const connection= require('./Database/db');
const app=express()

app.use(cors())
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',routes);


connection()
app.listen(8000);