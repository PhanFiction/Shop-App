const Cart = require('../models/cart.js');
const Food = require('../models/food.js');
const jwt = require('jsonwebtoken');
const { get } = require('mongoose');

// fetch items from the cart
const getCart = async () => {
    const cart = await Cart.find({});
    return cart[0];
}


// add to cart and handles subtracting items from cart
// contains only two items in the cart array. The subtotal and the items array which holds the object of items
exports.handleItemsInCart = async (req, res) => {

    const body = req.body;
    const cart = await getCart();

    let productInfo = await Food.findById(body.productId)// get product info
    console.log(body.productId);

    if(!productInfo) return res.status(500).send({type: "not found", message: "invalid request"});

    let newCartItem = null;

    let newItem = {
        productId: body.productId,
        name: productInfo.name,
        quantity: body.quantity,
        price: productInfo.price,
        total: body.quantity * productInfo.price,
    }

    if(cart)
    {
        const indexFound = cart.items.findIndex(item => item.productId.toString() === body.productId);
        console.log(body.productId); 
        console.log(indexFound);

        // set the cart amount to 0 if there is no items in the cart
        if(indexFound !== -1 && body.quantity <= 0)
        {
            console.log('item quantity is 0');

            cart.items.splice(indexFound, 1);
            cart.items.length === 0 ? cart.subTotal = 0 :  cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        
        // update the items in the cart if the items already exist
        }else if(indexFound !== -1){

            if(cart.items[indexFound].quantity > body.quantity)
            {
                console.log('item in cart and added it');
                cart.items[indexFound].quantity = cart.items[indexFound].quantity + body.quantity;
                cart.items[indexFound].total = cart.items[indexFound].quantity * productInfo.price;
                cart.items[indexFound].price = productInfo.price;
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }else{
                console.log('item in cart and removed item and subtracted total');
                cart.items[indexFound].quantity = cart.items[indexFound].quantity + body.quantity;
                cart.items[indexFound].total = cart.items[indexFound].quantity * productInfo.price;
                cart.items[indexFound].price = productInfo.price;
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc - next);
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
        console.log('no item in cart executed ');
        newCartItem = new Cart({
            items: [newItem],
            subTotal: parseInt(productInfo.price * body.quantity),
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
    
    const body = req.body;

    const token = req.token;

    const decodedToken = jwt.verify(token, process.env.SECRET); 

    if(!token || !decodedToken.id) return res.status(401).send({ error: 'token missing or invalid' });

    // fetch items from cart
    // if cart is empty, send error 
    // if cart is not empty, send a response saying made purchase 
    // delete items in cart

    const cart = await getCart();

    if(cart.items.length === 0)
    {
        return 
    }
}