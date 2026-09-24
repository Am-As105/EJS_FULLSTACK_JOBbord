const  db  =  require("../database/db_connect");

async function  get_offers()
{
    try
    {
        const [rows] = await db.promise().query(` SELECT * FROM offer `); 
        return rows;
        
    } catch (error) 
    {     
    }

}

 module.exports =  get_offers;