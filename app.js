

const express = require('express');
const db_connection  = require('./database/db_connect')
require('dotenv').config();
const get_offers = require('./reposietries/offerRepository');


const app  = express();
// app.get('/' , (lijay, lighadi) => 
// {

// })
// app.get('/offers' ,async (lijayed ,lighadi)  =>
// {
//     try
//     {
//         const offer_list = await get_offers();
//         lighadi.render( (err , data) => 
//         {

//         })
        
//     } catch (error)
//     {
        
//     }
       
// })

const index_page = require('./routes/routes');

app.use('/',index_page);
// app.use('  ',index_page)
// app.use('/offers/:id')
app.use(express.static('public'));

app.set('view engine', 'ejs');
console.log(app.get('view engine'));

app.listen(process.env.PORT , ()=>{console.log('runnning')});