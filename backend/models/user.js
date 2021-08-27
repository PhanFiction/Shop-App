const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [5, 'Must provide a minimum of 5 letters'],
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: [5, 'password needs to have length of 3']
    }
})

userSchema.plugin(uniqueValidator);

// removes the _id and replace it with id
userSchema.set('toJSON', {
    transform: (document, returnedObject) => { 
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('User', userSchema);
