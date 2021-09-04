const Cart = require('../models/cart.js');
const Food = require('../models/food.js');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

// fetch items from the cart
const getCart = async () => {
    const cart = await Cart.find({});
    return cart[0];
}


// add to cart and handles subtracting items from cart
// contains only two items in the cart array. The subtotal and the items array which holds the object of items
exports.handleItemsInCart = async (req, res) => {

    const id = req.user;

    const user = await User.findById(id);

    const body = req.body;

    const cart = await Cart.findOne({user});

    let productInfo = await Food.findById(body.productId)// get product info
    //console.log(body.productId);

    if(!productInfo) return res.status(500).send({type: "not found", message: "invalid request"});

    let newCartItem = null;

    let newItem = {
        productId: body.productId,
        name: productInfo.name,
        quantity: body.quantity,
        price: productInfo.price,
        total: body.quantity * productInfo.price,
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
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }else{
                //console.log('item quantity is less than cart, therefore subtracted it');
                const quantityToSubtract = cart.items[indexFound].quantity - body.quantity
                cart.items[indexFound].quantity -= quantityToSubtract;

                cart.items[indexFound].total = cart.items[indexFound].quantity * productInfo.price;

                cart.items[indexFound].price = productInfo.price;

                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }
        
        // quantiy greater than 0, add item that is not the same
        }else if(body.quantity > 0){
            console.log('item is greater than 0');

            cart.items.push({
                productId: body.productId,
                name: productInfo.name,
                quantity: body.quantity,
                price: productInfo.price,
                total: productInfo.price * body.quantity
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

    const cart = await Cart.find({});

    res.json(cart);
}

// when user makes a purchase, has to be logged in
exports.purchaseItems = async (req, res) => {

    const token = req.token;

    const decodedToken = jwt.verify(token, process.env.SECRET); 

    const user = await User.findById(decodedToken.id);  // update purchaseHistory
 
    const cart = await Cart.findOne({user: decodedToken.id}); // get cart and make item and total 0

    if(!token || !decodedToken.id) return res.status(401).send({ error: 'token missing or invalid' });

    //if(body.items.length === 0 || body.subTotal === 0) return res.send({error: "there is nothing in cart"});

    try{

        user.purchaseHistory.push(cart._id);
        await user.save();

        cart.items = [];
        cart.subTotal = 0;
        await cart.save();

        res.status(200).send({message: "successful purchase"});
    }catch(error){
        res.status(400).send({error: "could not process"});
    }


}