const breakfastRouter = require('express').Router();
const Food = require('../models/food.js');

// Fetch Breakfast items from the category
breakfastRouter.get('/', async (request, response) => {
    const items = await Food.find({category: 'Breakfast'})
    response.json(items);
})

// Path parameter for single breakfast item
breakfastRouter.get('/:id', async (request, response) => {
    const item = await Food.findById(request.params.id);
    response.json(item);
})

module.exports = breakfastRouter;