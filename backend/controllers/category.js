const Food = require('../models/food.js');
const jwt = require('jsonwebtoken');

//extract bearer token from request of user
const tokenExtractor = (req) => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') 
    {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

exports.getAllItems = async (req, res) => {
    const products = await Food.find({});
    res.status(200);
    res.json(products);
}

exports.getBreakfast = async(req, res) => {
    const products = await Food.find({category: 'breakfast'}); 
    res.status(200);
    res.json(products);
}

exports.getLunch = async(req, res) => {
    const products = await Food.find({category: 'lunch'}); 
    res.status(200);
    res.json(products);
}

exports.getDinner = async(req, res) => {
    const products = await Food.find({category: 'dinner'}); 
    res.status(200);
    res.json(products);
}

exports.getDrinks = async(req, res) => {
    const products = await Food.find({category: 'drinks'}); 
    res.status(200);
    res.json(products);
}

exports.getDessert = async(req, res)=> {
    const products = await Food.find({category: 'dessert'}); 
    res.status(200);
    res.json(products);
}

exports.getFood = async(req, res) => {
    const id = await req.params.id;
    const product = await Food.findById(id);
    res.status(200);
    res.json(product);
}

/**
 * if user is logged in, they can edit, add, delete, product from the database.
 */
exports.postItem = async (req, res) => {
    const body = req.body;

    let filePath = undefined;

    req.file === undefined ? filePath : filePath=req.file.path; // file path uknownn handler

    const token = await tokenExtractor(req); // extract token from body;
    
    const decodedToken = jwt.verify(token, process.env.SECRET); // verify token

/*     const decodedToken = jwt.verify(token, process.env.SECRET, (error, decoded) => {
        error ? res.status(400).send({error: error}) : console.log(decoded);

        // token substring was off
    }); */

    if (!token || !decodedToken.id) return res.status(401).send({ error: 'token missing or invalid' });
    

    const product = new Food({
        name: body.name,
        price: body.price,
        category: body.category,
        productImage: filePath,
    })

    try{
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);

    }catch(error){
        res.status(400).send({error: 'missing either name, price, or category'})
    }
}

// update price, description, category, picture
exports.updateItem = async(req, res) => {

    const body = req.body;

    const token = await tokenExtractor(req); 
    
    const decodedToken = jwt.verify(token, process.env.SECRET); 

    if (!token || !decodedToken.id) return res.status(401).send({ error: 'token missing or invalid' });

    const product = {
        name: body.name,
        price: body.price,
        category: body.category,
        productImage: body.productImage,
    }

    const updateItem = await Food.findByIdAndUpdate(req.params.id, product, {new: true});

    res.json(updateItem);

}

exports.deleteItem = async(req, res) => {
    const id = req.params.id;

    const token = await tokenExtractor(req); 
    
    const decodedToken = jwt.verify(token, process.env.SECRET); 

    if(!token || !decodedToken.id) return res.status(401).send({ error: 'token missing or invalid' });

    try{
        await Food.findByIdAndDelete(id);
        res.status(204).end();

    }catch(error){
        
        return res.status(401).toJSON({error: "Unauthorized to delete this product"});
    }


}

