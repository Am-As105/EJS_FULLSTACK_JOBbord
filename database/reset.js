const db = require('./db_connect');


async function reset_data() {
    try{
        await db.promise().query(`DROP TABLE IF EXISTS offer_technology`);
        await db.promise().query(`DROP TABLE IF EXISTS offer`);
        await db.promise().query(`DROP TABLE IF EXISTS company`);
        await db.promise().query(`DROP TABLE IF EXISTS technology`);
        await db.promise().query(`DROP TABLE IF EXISTS contra_type`);
        
    
        process.exit();
        
    } catch (error) {
        console.error( error);
        process.exit(1);
    }
}

reset_data();