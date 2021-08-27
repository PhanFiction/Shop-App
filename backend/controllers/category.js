const Food = require('../models/food.js');

exports.getAllItems = async (req, res) => {
    const items = await Food.find({});
    const message = 'fetched all meals from database';
    res.status(200);
    res.json({message: message, meal: items});
}

exports.getBreakfast = async(req, res) => {
    const items = await Food.find({category: 'Breakfast'}); 
    const message = 'fetched breakfast from db';
    res.status(200);
    res.json({message: message, meal: items});
}

exports.getLunch = async(req, res) => {
    const items = await Food.find({category: 'Lunch'}); 
    const message = 'fetched lunch from db';
    res.status(200);
    res.json({message: message, meal: items});
}

exports.getDinner = async(req, res) => {
    const items = await Food.find({category: 'Dinner'}); 
    const message = 'fetched dinner from db';
    res.status(200);
    res.json({message: message, meal: items});
}

exports.getDrinks = async(req, res) => {
    const items = await Food.find({category: 'Drinks'}); 
    const message = 'fetched drinks from db';
    res.status(200);
    res.json({message: message, meal: items});
}

exports.getDessert = async(req, res)=> {
    const items = await Food.find({category: 'Dessert'}); 
    const message = 'fetched dessert from db';
    res.status(200);
    res.json({message: message, meal: items});
}

exports.getFood = async(req, res) => {
    const id = await req.params.id;
    const item = await Food.findById(id);
    const message = 'success in getting food';
    res.status(200);
    res.json({message: message, meal: item});
}

exports.updateItem = async(req, res) => {
    
}

