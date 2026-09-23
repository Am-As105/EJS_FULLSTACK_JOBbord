

const express = require('express');
const db_connection  = require('./database/db_connect')
require('dotenv').config();


const app  = express();


// app.get('/get' , (request, response)=> 
// {
//     response.send(" test "); 

// })

 app.get('/offers', (request, response)=> 
{
    
});


const PORT  = process.env.PORT; 
app.listen(PORT , ()=>{console.log('runnning')});