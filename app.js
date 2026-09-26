const express = require('express');
const db_connection = require('./database/db_connect');
require('dotenv').config();

const methodOverride = require('method-override');

const app = express();

const index_page = require('./routes/routes');

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', index_page);

app.listen(process.env.PORT, () => {
    console.log('runnning');
});