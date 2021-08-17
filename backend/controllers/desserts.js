const dessertsRouter = require('express').Router();
const Food = require('../models/food.js');

dessertsRouter.get('/', async (request, response) => {
    const items = await Food.find({category: 'Dessert'}); 
    response.json(items);
})

dessertsRouter.get('/:id', async (request, response) => {
    const item = await Food.findById(request.params.id);
    response.json(item);
})

module.exports = dessertsRouter;