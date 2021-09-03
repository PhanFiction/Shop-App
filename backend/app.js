const express = require('express');
const cors = require('cors');
const app = express();
const categoryRouter = require('./routes/category.js');
const userRouter = require('./routes/user.js');
const cartRouter = require('./routes/cart.js');
const path = require('path');
const db = require('./utils/db.js');
const middleware = require('./utils/middleware.js');

db();

app.use(cors());
app.use(express.json());

app.use(middleware.tokenExtractor);

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/user', userRouter);
app.use('/menu', categoryRouter);
app.use('/cart', cartRouter);

app.use(middleware.unknownEndpoint);

module.exports = app;