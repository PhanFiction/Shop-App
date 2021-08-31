const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'dessert', 'drinks'],
        required: true
    },
    productImage: {
        type: String,
    }
})

foodSchema.plugin(uniqueValidator);

foodSchema.set('toJSON', {
    transform: (document, returnedObject) => { // transform to string to be safe even though we use res.JSON
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Items', foodSchema);