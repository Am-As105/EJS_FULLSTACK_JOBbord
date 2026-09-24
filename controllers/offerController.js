
const offerRepository = require('../reposietries/offerRepository');


async function getOffers_Repository(request, response)
{
    const data_offers = await offerRepository();

    response.json(data_offers);
}

async function  get_index(request, response)
{
    // const data_offers = aait offerRepository();

    response.render('index');
}
module.exports = {
    get_index, getOffers_Repository

};