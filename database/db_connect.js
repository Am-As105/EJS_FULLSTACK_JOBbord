const  mysql = require('mysql2');
require('dotenv').config();



const  connection = mysql.createConnection({
    host:"localhost",
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

connection.connect( (err) => 
{
    if (err)
    {
        console.error(err);
        return   
    }else {console.log("DB CONNECTED SUCCSES")}
})

module.exports  = connection;