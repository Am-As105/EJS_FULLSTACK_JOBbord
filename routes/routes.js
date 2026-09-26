const express = require('express');

const offerController = require('../controllers/offerController');
const get_offers = require('../reposietries/offerRepository');

const route = express.Router();

route.get('/', offerController.get_index);

// route.get('/offers', offerController.g);
route.get('/deposer-offre', offerController.get_deposerOffer);
route.get('/offers/:slug', offerController.get_offerByslug);
route.post('/offers', offerController.createOffer);
route.delete('/offers/:id', offerController.deleteOffer);
route.post('/post', offerController.updateOffer);


module.exports = route;