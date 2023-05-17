const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

//extract bearer token from request of user
const tokenExtractor = (req) => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}


// create new user
exports.createAccount = async (req, res) => {
    const body = req.body;

    if(body.password === undefined) return res.status(400).send({error: "missing password"});

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    // create new user and store password hash
    const user = new User({
        username: body.username,
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

exports.getUser = async(req, res) => {
    const user = await User.findById(req.params.userid);
    res.json(user);
}

exports.updateUser = async(req, res) => {
    const body = req.body;
    const token = tokenExtractor(req);
    console.log(token);

    // get token from user and verify
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if(!token || !decodedToken.id){
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    // update user info
    const user = {
        username: body.username,
        password: passwordHash,
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

    // compare password from post and db
    const passwordCorrect = (user) === null ? false : await bcrypt.compare(body.password, user.passwordHash); 

    // if user not found, return error of 401 
    if(!(user && passwordCorrect)) return res.status(401).send({error: "incorrect password"});

    const userForToken = {
        username: user.username,
        id: user._id,
    }
    
    // sign token
    const token = jwt.sign(userForToken, process.env.SECRET);
    res
        .status(200)
        .send({token, username: user.username, name: user.name, id: user._id})
}