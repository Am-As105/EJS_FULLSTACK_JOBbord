const express = require('express');

const offerController = require('../controllers/offerController');
const get_offers = require('../reposietries/offerRepository');

const route = express.Router();

route.get('/', offerController.get_index);
// route.get('/search', offerController.seach_input);


// route.get('/offers', offerController.g);
route.get('/deposer-offre', offerController.get_deposerOffer);
route.get('/offers/:slug', offerController.get_offerByslug);
route.get('/offers/:slug/edit', offerController.get_editOffer);
route.post('/offers', offerController.createOffer);
route.delete('/offers/:id', offerController.deleteOffer);

route.post('/offers/:slug', offerController.updateOffer);

route.get('/search', offerController.search_offers);
route.get('/filter', offerController.filter_offers);
module.exports = route;