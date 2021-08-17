const userRouter = require('express').Router();
const User = require('../models/user.js');


userRouter.post('/', async (request, response)=> {
    const body = request.body;
    
})

module.exports = userRouter;