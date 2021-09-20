const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');


//extract bearer token from request of user
const tokenExtractor = (req) => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'bearer') 
    {
        return req.headers.authorization.split(' ')[1];

    }else if (req.query && req.query.token){

        return req.query.token;
    }
    return null;
}


// create new user
exports.createAccount = async (req, res) => {
    const body = req.body;

    if(body.password === undefined) return res.status(400).send({error: "missing password"});

    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    //console.log('req ', req.body);
    //console.log(req.body.password);

    // create new user and store password hash
    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash: passwordHash,
    })

    try{
        const savedUser = await user.save();
        res.status(200);
        res.json(savedUser);

    }catch(error){
        res.status(400).send(error);
    } 
}

// fetch a list of users in the database
exports.getUsers = async (req, res) => {
    const user = await User.find({}).populate('cart');
    res.json(user);
}


exports.getUser = async(req, res) => {
    const user = await User.findById(req.params.userid);
    res.json(user);
}


exports.updateUser = async(req, res) => {
    const body = req.body;
    const token = tokenExtractor(req)

    // get token from user and verify
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if(!token || !decodedToken.id)
    {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    // update user info
    const user = {
        username: body.username,
        user: body.user,
        password: body.password,
    }

    // save info
    const updateUser = await User.findOneAndUpdate(req.params.userid, user, {new: true});
    
    res.json(updateUser);
}

// login
exports.login = async(req, res) => {
    const body = req.body;

    if(body.password === undefined) return res.status(400).send({error: "missing password"});

    // look for user in database
    const user = await User.findOne({username: body.username});
    //console.log(user.passwordHash);

    // compare password from post and db
    const passwordCorrect = (user) === null ? false : await bcrypt.compare(body.password, user.passwordHash); 

    //console.log('password correct ', passwordCorrect);

    // if user not found, return error of 401 
    if(!(user && passwordCorrect)) return res.status(401).send({error: "incorrect password"});

    // if sucessful attach a token to the account with the user id
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