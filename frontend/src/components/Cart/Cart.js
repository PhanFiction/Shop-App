import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom';
import CartItem from './Card/CartItem';
import { makeStyles } from '@material-ui/core';
import authService from '../../service/authorization.js';
import Button from '@material-ui/core/Button';

const styles = makeStyles({
    'root': {
        marginTop: "5%",
    }
})

export default function Cart({user, cart})
{
    const cartStyles = styles();
    const [cartItems, setItems] = React.useState(cart.items);
    const [subTotal, setPrice] = React.useState(cart.subTotal);
 

    if(user === null) return (<Redirect to={"/user/login"}/>)
    if(cart === null || cart === undefined)
    {
        return(
            <></>
        )
    }

    const subtractItem = async (id) => {
        const items = [...cartItems];
        let index = items.findIndex(item => item.productId === id);

        if(items !== undefined) items[index].quantity--;

        // add price
        const itemPrice = items[index].price;
        const total = (subTotal - itemPrice).toFixed(4);

        const cartItem = {
            productId: items[index].productId,
            quantity: items[index].quantity,
        }

        if(items[index].quantity <= 0) 
        {
            const filterItems = items.filter(item => item.productId !== id);
            setPrice(parseFloat(total));
            setItems(filterItems);
        }else{
            setPrice(parseFloat(total));
            setItems(items);
        }
        
        // save to db
        authService.handleItemsInCart(cartItem);
        
    }

    const addItem = async (id) => {
        let items = [...cartItems];
        let index = items.findIndex(item => item.productId === id);
        items[index].quantity++;

        // update price
        const itemPrice = items[index].price;
        const total = (subTotal + itemPrice).toFixed(4);

        const cartItem = {
            productId: items[index].productId,
            quantity: items[index].quantity,
        }

        setPrice(parseFloat(total));
        setItems(items);

        await authService.handleItemsInCart(cartItem)
    }
    const refreshPage = () => {
        window.location.reload(false);
    }

    const handlePurchase = async () => {

        if(cart.items.length === 0)return alert('cart is empty');
        
        const purchased = await authService.purchaseItems(cart);
        alert(purchased.message);
        refreshPage();
    }
    

    // save to backend 
    return(
        <Container fixed> 
            <Grid container className={cartStyles.root} spacing={4}>
                {
                    cartItems.map(item =>
                        <CartItem key={item.name} name={item.name} imageName={item.productImage} quantity={item.quantity}
                            price={item.price} id={item.productId} subtractItem={subtractItem}
                            addItem={addItem}
                        /> 
                    )
                }
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Total Cost: {subTotal}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button size="small" variant="outlined"onClick={handlePurchase}>
                        <Typography variant="h6" component="h6">
                            Purchase
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}