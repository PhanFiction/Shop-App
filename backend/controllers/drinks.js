const drinksRouter = require('express').Router();
const Food = require('../models/food.js');


/**
 * Fetch lunch items from the category
 */
drinksRouter.get('/', async (request, response) => {
    const items = await Food.find({category: 'Drinks'})
    response.json(items);
})

drinksRouter.get('/:id', async (request, response) => {
    const item = await Food.findById(request.params.id);
    response.json(item);
})

module.exports = drinksRouter; 