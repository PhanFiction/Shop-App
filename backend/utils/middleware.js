
const getTokenFrom = (req) => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

const unknownEndpoint = async (req, res) => {
    res.status(404).send({error: "unknown page"});   
}

const tokenExtractor = async (req, res, next) => {
    req.token = getTokenFrom(req);
    next();
}

module.exports = {
    tokenExtractor,
    unknownEndpoint,
}