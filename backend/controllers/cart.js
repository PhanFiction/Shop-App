const Cart = require('../models/cart.js');
const Food = require('../models/food.js');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');


// add to cart and handles subtracting items from cart
// contains only two items in the cart array. The subtotal and the items array which holds the object of items
exports.handleItemsInCart = async (req, res) => {
    const token = req.token;

    const decodedToken = jwt.verify(token, process.env.SECRET); 

    const id = await User.findById(decodedToken.id);  

    const user = await User.findById(id);
 
    const body = req.body;

    const cart = await Cart.findOne({user});
    

    let productInfo = await Food.findById(body.productId)// get product info
    //console.log(body.productId);

    if(!productInfo) return res.status(500).send({type: "not found", message: "invalid request"});
    //console.log('body info', productInfo);
    //console.log(req.body);

    let newCartItem = null;

    // create new item for cart
    let newItem = {
        productId: body.productId,
        name: productInfo.name,
        quantity: body.quantity,
        price: productInfo.price,
        total: body.quantity * productInfo.price,
        productImage: productInfo.productImage
    }


    if(!user) return res.json({message: "need to be signed in"});

    if(cart && user)
    {
        const indexFound = cart.items.findIndex(item => item.productId.toString() === body.productId);

        // set the cart amount to 0 if there is no items in the cart
        if(indexFound !== -1 && body.quantity <= 0)
        {
            //console.log('item quantity is 0');

            cart.items.splice(indexFound, 1);
            cart.items.length === 0 ? cart.subTotal = 0 :  cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        
        // update the items in the cart if the items already exist
        }else if(indexFound !== -1){

            if(body.quantity > cart.items[indexFound].quantity)
            {
                //console.log('item quantity greater than cart quantity, therefore added  it');
                cart.items[indexFound].quantity = cart.items[indexFound].quantity + body.quantity
                cart.items[indexFound].total = cart.items[indexFound].quantity * productInfo.price;
                cart.items[indexFound].price = productInfo.price;
                cart.items[indexFound].productImage = productInfo.productImage;
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }else{
                //console.log('item quantity is less than cart, therefore subtracted it');
                const quantityToSubtract = cart.items[indexFound].quantity - body.quantity
                cart.items[indexFound].quantity -= quantityToSubtract;
                cart.items[indexFound].total = cart.items[indexFound].quantity * productInfo.price;
                cart.items[indexFound].price = productInfo.price;
                cart.items[indexFound].productImage = productInfo.productImage;
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }
        
        // quantiy greater than 0, add item that is not the same and not in the cart
        }else if(body.quantity > 0){
            //console.log('item is greater than 0');
            //console.log(productInfo.productImage);

            cart.items.push({
                productId: body.productId,
                name: productInfo.name,
                quantity: body.quantity,
                price: productInfo.price,
                total: productInfo.price * body.quantity,
                productImage:  productInfo.productImage
            })
            cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        }else{

            return res.status(400).json({
                type: "Invalid",
                msg: "Invalid request"
            })
        }

        let savedCartItem = await cart.save();
        res.json(savedCartItem);

    }else{
        //console.log('user and item is not in cart. Create user and item');
        newCartItem = new Cart({
            items: [newItem],
            subTotal: productInfo.price * body.quantity,
            user,
        })

        let savedCart = await newCartItem.save();

        res.json(savedCart);
    }
}

// display items from cart
exports.displayCartItems = async (req, res) => {
    const token = req.token;
    try{
        const decodedToken = jwt.verify(token, process.env.SECRET); 
        const user = await User.findById(decodedToken.id);  
        const cart = await Cart.findOne({user});
        res.json(cart);
    
    }catch(error){
        res.json("You need to be logged in")
    }
}

// when user makes a purchase, has to be logged in
exports.purchaseItems = async (req, res) => {
    const token = req.token;

    const decodedToken = jwt.verify(token, process.env.SECRET); 

    const user = await User.findById(decodedToken.id);  // update purchaseHistory
 
    //const cart = await Cart.findOne({user: decodedToken.id}); // get cart and make item and total 0
    const cart = await Cart.findOne({user}); 

    if(!token || !decodedToken.id) return res.status(401).send({ error: 'token missing or invalid' });

    if(cart.items.length === 0 || cart.subTotal === 0) return res.send({error: "there is nothing in cart"});

    console.log(cart);

    try{
        user.purchaseHistory.push(cart._id);
        await user.save();
 
        cart.items = [];
        cart.subTotal = 0;
        await cart.save();

        res.status(200).send({message: "purchased successfully"});
    }catch(error){
        res.status(400).send({error: "could not process"});
    }
}