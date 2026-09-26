const { response, request } = require('express');
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

async function get_deposerOffer(request, response)
{
    const companies = await offerRepository.get_companies();
    const contracts = await offerRepository.get_contraType();

    response.render('pages/deposer-offre', {
        companies,
        contracts,
        errors: {},
        data:{}
    });
}
    

async function createOffer(request, response)
{
    const data = request.body;
     
    let errors = {};
    console.log(data);

    if (!data.title || data.title.trim().length < 3)
        errors.title = "Le titre doit contenir au moins 3 caractères";
    if (!data.description || data.description.trim().length < 10)
        errors.description = "La description doit contenir au moins 10 caractères";

    if (!data.profile || data.profile.trim().length < 5)
        errors.profile = "Le profil recherché est obligatoire";

    if (!data.contact || !data.contact.includes('@'))
        errors.contact = "Veuillez entrer un email valide";

    if(!data.company)
        errors.company = "L'entreprise est obligatoire";
   if (!data.contract)
     errors.contract = "Le type de contrat est obligatoire";

    if(Object.keys(errors).length > 0)
    {
        const companies = await offerRepository.get_companies();
        const contracts = await offerRepository.get_contraType();
        return response.status(400).render('pages/deposer-offre' , { errors,data , companies, contracts})

    }

     const slug = data.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    data.slug = slug;
    await offerRepository.createOffer(data);

    response.redirect('/#offers');
}

// async function updateOffer(request, response)
// {
//     const id = request.params.id;
//     const data = request.body;

//     await offerRepository.updateOffer(id, data);

//     response.redirect(`/offers/${id}`); 
// }
async function get_editOffer(request, response)
{
    const slug = request.params.slug;

    const offer = await offerRepository.get_offerByslug(slug);

    const companies = await offerRepository.get_companies();
    const contracts = await offerRepository.get_contraType();

    response.render('pages/edit-offer', {
        offer,
        companies,
        contracts,
        errors: {},
        data:{}
    });

}

async function updateOffer(request, response)
{
    const old_slug = request.params.slug;
    const data = request.body;

    let errors = {};

    if (!data.title || data.title.trim().length < 3)
        errors.title = "Le titre doit contenir au moins 3 caractères";

    if (!data.description || data.description.trim().length < 10)
        errors.description = "La description doit contenir au moins 10 caractères";

    if (!data.profile || data.profile.trim().length < 5)
        errors.profile = "Le profil recherché est obligatoire";

    if (!data.contact || !data.contact.includes('@'))
        errors.contact = "Veuillez entrer un email valide";

    if (!data.company)
        errors.company = "L'entreprise est obligatoire";

    if (!data.contract)
        errors.contract = "Le type de contrat est obligatoire";

    if (Object.keys(errors).length > 0)
    {
        const companies = await offerRepository.get_companies();
        const contracts = await offerRepository.get_contraType();
        const offer = await offerRepository.get_offerByslug(old_slug);

        return response.status(400).render('pages/edit-offer', {
            data,
            errors,
            companies,
            contracts,
            offer
        });
    }

    const new_slug = data.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

    await offerRepository.updateOffer(old_slug, data, new_slug);

    response.redirect(`/offers/${new_slug}`);
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
    get_editOffer,
    updateOffer,
    deleteOffer,
    get_deposerOffer
};