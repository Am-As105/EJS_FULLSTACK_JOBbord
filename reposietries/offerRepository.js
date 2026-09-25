const db = require("../database/db_connect");

async function get_offers()
{
    try
    {
        const [rows] = await db.promise().query(`
            SELECT 
            offer.*,
            company.company_name
            FROM offer
            JOIN company
            ON offer.company_company_id = company.company_id
        `);

        return rows;

    }
    catch (error)
    {
        console.log(error);
    }
}

async function get_offerById(id)
{
    try
    {
        const [rows] = await db.promise().query(`
            SELECT 
            offer.*,
            company.company_name
            FROM offer
            JOIN company
            ON offer.company_company_id = company.company_id
            WHERE offer.offer_id = ?
        `, [id]);

        return rows[0];

    }
    catch (error)
    {
        console.log(error);
    }
}

module.exports = {
    get_offers,
    get_offerById
};