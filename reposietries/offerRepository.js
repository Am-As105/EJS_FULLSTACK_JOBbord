const db = require("../database/db_connect");


async function get_offers()
{
    const [rows] = await db.promise().query(`
        SELECT 
            offer.*,
            company.company_name,
            contra_type.contra_label
        FROM offer
        JOIN company
            ON offer.company_company_id = company.company_id
        JOIN contra_type
            ON offer.contra_type_id = contra_type.contra_type_id
    `);

    return rows;
}


async function get_offerByslug(slug)
{
    const [rows] = await db.promise().query(`
        SELECT 
            offer.*,
            company.company_name,
            contra_type.contra_label
        FROM offer
        JOIN company
            ON offer.company_company_id = company.company_id
        JOIN contra_type
            ON offer.contra_type_id = contra_type.contra_type_id
        WHERE offer_slug  = ?
    `, [slug]);

    return rows[0];
}


async function createOffer(data)
{
    const [result] = await db.promise().query(`
        INSERT INTO offer
        (
            offer_title,
            offer_description,
            offer_slug,
            offer_city,
            offer_profile_sought,
            offer_contact_info,
            company_company_id,
            contra_type_id
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
        data.title,
        data.description,
        data.slug,
        data.city,
        data.profile,
        data.contact,
        data.company,
        data.contract
    ]);

    return result.insertId;
}

async function updateOffer(slug, data, new_slug)
{
    const [result] = await db.promise().query(`
        UPDATE offer
        SET
            offer_title = ?,
            offer_description = ?,
            offer_profile_sought = ?,
            offer_contact_info = ?,
            company_company_id = ?,
            contra_type_id = ?,
            offer_slug = ?
        WHERE offer_slug = ?
    `, 
    [
        data.title,
        data.description,
        data.profile,
        data.contact,
        data.company,
        data.contract,
        new_slug,
        slug
    ]);

    return result;
}
async function deleteOffer(id)
{
    await db.promise().query(`
        DELETE FROM offer
        WHERE offer_id = ?
    `, [id]);
}


async function get_companies()
{
    const [rows] = await db.promise().query(`
        SELECT company_id, company_name
        FROM company
    `);

    return rows;
}

async function get_contraType()
{
    const [rows] = await db.promise().query(`
        SELECT contra_type_id, contra_label FROM contra_type
        `)
        return rows;

}
async function search_offers(search)
{
    const [rows] = await db.promise().query(`
        SELECT
            offer.*,
            company.company_name,
            contra_type.contra_label
        FROM offer
        JOIN company
            ON offer.company_company_id = company.company_id
        JOIN contra_type
            ON offer.contra_type_id = contra_type.contra_type_id
        WHERE
        offer.offer_title LIKE ?
        OR offer.offer_description LIKE ?
        OR company.company_name LIKE ?
        OR offer.offer_city LIKE ?
    `, [
        `%${search}%`,
        `%${search}%`,
        `%${search}%`,
        `%${search}%`
    ]);

    return rows;
}
async function filter_offers(filters)
{
    let sql = `
        SELECT
            offer.*,
            company.company_name,
            contra_type.contra_label
        FROM offer
        JOIN company
        ON offer.company_company_id = company.company_id
        JOIN contra_type
        ON offer.contra_type_id = contra_type.contra_type_id
        WHERE 1=1
    `;

    const params = [];

    if (filters.city)
    {
        sql = sql + ` AND offer.offer_city = ?`;
        params.push(filters.city);
    }

    if (filters.contract)
    {
        sql = sql + ` AND contra_type.contra_label = ?`;
        params.push(filters.contract);
    }

    if (filters.technology)
    {
        sql = sql + ` AND technology.technology_name = ?`;
        params.push(filters.technology);
    }

    if (filters.sort === 'recent')
    {
        sql = sql + ` ORDER BY offer.date_publication DESC`;
    }
    else if (filters.sort === 'oldest')
    {
        sql = sql + ` ORDER BY offer.date_publication ASC`;
    }

    const [rows] = await db.promise().query(sql, params);

    return rows;
}

module.exports = {
    get_offers,
    get_offerByslug,
    createOffer,
    updateOffer,
    deleteOffer,
    get_companies,
    get_contraType,
    search_offers,
    filter_offers

};