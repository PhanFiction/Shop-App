import React, {useState, useEffect} from 'react';
import Form from '../../../Button/Form.js';
import food from '../../../../service/food.js';
import { useParams, useRouteMatch } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import getImage from '../../../../service/getImage.js';
import authService from '../../../../service/authorization.js';

const useStyles = makeStyles({
    center: {
        marginTop: "10%",
    },
    card : {
        padding: 0,
        height: '350px',
        '& a': {
            color: 'white'
        }
    },
    media:{
        height: 'inherit',
        padding: 0,

    },
    hover: {
        "&& :hover": {
            color: "rgba(255, 122, 71, 0.75)",
            textDecoration: "underline",
        },
    },
    space: {
        marginTop: '10%',
    }
})

// need to pass in an ID to get a specific item. 
export default function Food({user, setCart})
{
    const classes = useStyles();
    const params = useParams();
    const categoryPath = useRouteMatch();
    const categoryType = categoryPath.path.slice(6, categoryPath.path.length-4);

    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Load item id 
    useEffect(()=>{

        const getFood = async () => {
            const item = await food.getFoodID(categoryType, params.id);
            setItem(item);
        }
        getFood();
    },[])

    if(item === null)
    {
        return(
            <></>
        )
    }

    // add item to the cart
    const handleSubmit = async(event) => {
        event.preventDefault();

        const cartObj = {
            productId: params.id,
            quantity: quantity,
        }

        if(user !== null)
        {
            try{
                await authService.handleItemsInCart(cartObj);
                const cart = await authService.getCartItems();
                setCart(cart);
                alert('added item to cart');
            }catch(error){
                alert('could not add to cart');
            }
        }
    }

    // change value
    const handleChange = (event) => {
        setQuantity(event.target.value);
    }
    
    return(
        <>
            <Grid container justifyContent="center" alignItems="center">
                {/*center */}
                <Grid item xs={6}>
                    <Grid container className={classes.center} spacing={8} alignItems="center">
                        {/*Card to display image */}
                        <Grid item xs={12} sm={12} md={6}>
                            <Card>
                                <CardContent className={`${classes.card}`}>
                                    <CardMedia image={getImage(item.productImage)} className={classes.media}/>                                       
                                </CardContent>
                            </Card>
                        </Grid>
                        {/*Button to add item to cart, quality, and */}
                        <Grid item xs={12} sm={12} md={6}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h5">{`Name: ${item.name}`}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} className={classes.space}>
                                <Typography variant="h5">{`Price: ${item.price}$`}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} className={classes.space}>
                                <Form handleSubmit={handleSubmit} value={quantity} handleChange={handleChange}/>
                            </Grid>                                
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}