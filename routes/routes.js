const express = require('express');

const offerController = require('../controllers/offerController');

const route = express.Router();

route.get('/', offerController.get_index);

route.get('/offers', offerController.getOffers_Repository);

// route.get('/offers/:id', offerController.get_offerById);

module.exports = route;