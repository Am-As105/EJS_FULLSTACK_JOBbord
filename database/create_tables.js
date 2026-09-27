const db = require("./db_connect");
const fs = require("fs");
const path = require("path");
const { exit } = require("process");

async function create_tables()
{
    try
    {
        const path_script = path.join(__dirname, "schema.sql");

        const sql = fs.readFileSync(path_script, "utf8");

        await db.promise().query(sql);

        console.log("Tables created successfully");
        process.exit();

    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
}

  create_tables();