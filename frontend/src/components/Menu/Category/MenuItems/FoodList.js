import React, {useEffect, useState} from 'react';
import food from '../../../../service/food.js';
import ParallaxBG from '../../../parallax/Parallax.js';
import getImage from '../../../../service/getImage.js';
import FoodCard from '../FoodCard.js';
import {Link as RouterLink, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const userStyles = makeStyles({
    center: {
        display: "flex",
        alignItems:"center",
        justifyContent: "center"
    },
    wrapper: {
        margin: "5%"
    }
});


/**
 * @param {} props 
 * @returns list of food based on the type
 */
export default function Items(props)
{
    const [items, setCategory] = useState('');
    const classes = userStyles();
    const match = useRouteMatch();

    useEffect(()=>{
        const fetchData = async (categories) => {
            const category = await food.getCategory(categories);
            setCategory(category);
        }
        fetchData(props.category)
        
    },[props.category]);
    

    return(
        <>
        {/*Category menu items */}
            <Grid container>
                <Grid item xs={12}>
                    <ParallaxBG bg={getImage('images/bg_4.jpg')}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={3}>
                                <Typography variant="h3">
                                    {props.category}{" menu"}
                                </Typography>
                            </Grid>
                        </Grid>
                    </ParallaxBG>
                </Grid>

        {/* List out category items with price */}
        <Grid container justifyContent="center" alignItems="center" className={classes.wrapper}>
                <Grid container spacing={8}>
                    {
                        items.length === 0 
                        ? <></> 
                        : items.map(item => 
                            <FoodCard key={item.id} foodNameImage={item.productImage}>
                                <Link component={RouterLink} to={`${match.url}/${item.id}`}>
                                    <Typography variant="h4" align="center">{item.name}</Typography>
                                </Link>
                            </FoodCard>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}