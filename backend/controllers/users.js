const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');


// create new user
exports.createAccount = async(req, res) => {
    const body = req.body;
    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    // create new user and store password hash
    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash
    });

    const savedUser = await user.save();
    res.status(200);
    response.json(savedUser);
}

// fetch user from database
exports.getUser = async(req, res) => {
    const user = User.find({}).populate('user', {username: 1, user: 1});
    res.json(user);
}


// login
exports.login = async(req, res) => {
    const body = req.body;
    // look for user in database
    const user = await User.findOne({username: body.username});

    // compare password from post and db
    const passwordCorrect = (user) === null ? false : bcrypt.compare(body.password, user.passwordHash); 

    // if user not found, return error of 401 
    if(!(user && passwordCorrect)) return res.status(401);

    // if sucessful attach a token to the account
    const userForToken = {
        username: user.username,
        id: user._id,
    }
    
    // sign token
    const token = jwt.sign(userForToken, process.env.SECRET);

    res
        .status(200)
        .send({token, username: user.username, name: user.name})
}