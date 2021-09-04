import React, {useEffect, useState} from 'react';
const cart = require('../../service/cart');


/*
TODO
1. Display items from the cart
2. increment/decrement by 1 button for item in cart
3. remove item from cart button
*/
export default function Cart()
{
    const [quantity, setQuantity] = useState(0);
    const [cartItems, setCartItems] = useState(null);

    useEffect(()=> {
        cart.getCartItems
        .then(item => setCartItems(item));
    }, [])

    return(
        <div>
            <h1>Cart</h1>
        </div>
    )
}