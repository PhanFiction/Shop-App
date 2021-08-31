const express = require('express');
const cors = require('cors');
const app = express();
const categoryRouter = require('./routes/category.js');
const userRouter = require('./routes/user.js');
const path = require('path');
const db = require('./utils/db.js');

db();

app.use(cors());
app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api', userRouter);
app.use('/menu', categoryRouter);

module.exports = app;