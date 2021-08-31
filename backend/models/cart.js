const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const itemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
});

itemSchema.plugin(uniqueValidator);

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => { // transform to string to be safe even though we use res.JSON
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const cartSchema = new Schema({
    items: [ItemSchema],
    subTotal: {
        default: 0,
        type: Number
    }
});

cartSchema.plugin(uniqueValidator)

cartSchema.set('toJSON', {
    transform: (document, returnedObject) => { // transform to string to be safe even though we use res.JSON
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('cart', CartSchema);