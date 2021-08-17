const mongoose = require('mongoose');
const config = require('./utils/config.js');
const express = require('express');
const cors = require('cors');
const app = express();
const breakfastRouter = require('./controllers/breakfast.js');
const lunchRouter = require('./controllers/lunch.js');
const dinnerRouter = require('./controllers/dinner.js');
const dessertsRouter = require('./controllers/desserts.js');
const drinksRouter = require('./controllers/drinks.js');
const path = require('path');
//const importData = require('./importingData/importData.js');

/**
 * TODO
 * 1. User sign up page
 * 2. User should be able to make purchase in sign up page
 */

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

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/products/breakfast', breakfastRouter);
app.use('/products/lunch', lunchRouter);
app.use('/products/dinner', dinnerRouter);
app.use('/products/desserts', dessertsRouter);
app.use('/products/drinks', drinksRouter);

//importData();

module.exports = app;