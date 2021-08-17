const dinnerRouter = require('express').Router();
const Food = require('../models/food.js');

/**
 * Fetch Dinner items from the category
 */
 dinnerRouter.get('/', async (request, response) => {
    const items = await Food.find({category: 'Dinner'})
    response.json(items);
})

dinnerRouter.get('/:id', async (request, response) => {
    const item = await Food.findById(request.params.id);
    response.json(item);
})

module.exports = dinnerRouter; 