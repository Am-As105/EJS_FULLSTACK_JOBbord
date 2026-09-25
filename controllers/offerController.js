const offerRepository = require('../reposietries/offerRepository');


// async function getOffers_Repository(request, response)
// {
//     const data_offers = await offerRepository();

//     response.render('index', {offers, data_offers})
// }

async function get_index(request, response)
{
    const data_offers = await offerRepository();

    response.render('index', {offers: data_offers });
}


async function get_offerById(request, response)
{
    const id = request.params.id;

    const offer = await offerRepository(id);

    response.render('pages/offre-detail', { offer });
}


module.exports = {
    get_index,
    getOffers_Repository,

};