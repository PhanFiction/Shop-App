const mongoose = require('mongoose');
const config = require('./config.js');

module.exports = () => { 
    mongoose.connect(config.MONGODB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true 
    })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })
}
