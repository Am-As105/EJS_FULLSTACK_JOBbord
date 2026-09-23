

const express = require('express');
const db_connection  = require('./database/db_connect')
require('dotenv').config();


const app  = express();



const PORT  = process.env.PORT; 
app.listen(PORT , ()=>{console.log('runnning')});