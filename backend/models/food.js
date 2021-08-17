const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drinks'],
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    }
})

foodSchema.set('toJSON', {
    transform: (document, returnedObject) => { // transform to string to be safe even though we use res.JSON
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Items', foodSchema);