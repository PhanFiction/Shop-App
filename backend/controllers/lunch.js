const lunchRouter = require('express').Router();
const Food = require('../models/food.js');


/**
 * Fetch lunch items from the category
 */
lunchRouter.get('/', async (request, response) => {
    const items = await Food.find({category: 'Lunch'})
    response.json(items);
})

lunchRouter.get('/:id', async (request, response) => {
    const item = await Food.findById(request.params.id);
    response.json(item);
})

module.exports = lunchRouter; 