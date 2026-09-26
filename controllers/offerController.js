const offerRepository = require('../reposietries/offerRepository');

async function get_index(request, response)
{
    const data_offers = await offerRepository.get_offers();

    response.render('index', {
        offers: data_offers
    });
}

async function get_offerByslug(request, response)
{
    const id = request.params.slug;

    const offer = await offerRepository.get_offerByslug(id);

    response.render('pages/offre-detail', {
        offer
    });
}

async function createOffer(request, response)
{
    const data = request.body;
    

    await offerRepository.createOffer(data);

    response.redirect('/offers');
}

async function updateOffer(request, response)
{
    const id = request.params.id;
    const data = request.body;

    await offerRepository.updateOffer(id, data);

    response.redirect(`/offers/${id}`); 
}

async function deleteOffer(request, response)
{
    const id = request.params.id;

    await offerRepository.deleteOffer(id);

    response.redirect('/offers');
}

module.exports = {
    get_index,
    get_offerByslug,
    createOffer,
    updateOffer,
    deleteOffer
};