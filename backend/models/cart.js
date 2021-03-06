const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const itemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
    },
    name: {
        type: String,
        required: true,
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
    },
    productImage: {
        type: String,
    }
},{ _id : false });

itemSchema.plugin(uniqueValidator);

/* itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
}) */


const cartSchema = new mongoose.Schema({
    items: [itemSchema],
    subTotal: {
        default: 0,
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

/* cartSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
}) */


module.exports = mongoose.model('Cart', cartSchema);