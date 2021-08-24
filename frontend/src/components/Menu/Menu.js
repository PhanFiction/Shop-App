import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ParallaxBG from './parallax/Parallax.js';
import getImage from '../../getImage.js';
import Typography from '@material-ui/core/Typography';
import FoodCard from './Category/FoodCard.js';
import { makeStyles } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const categories = [
    {
        title: "Breakfast",
        space: 4,
        foodNameImage: "/images/breakfast-9",
        link: <Link component={RouterLink} to='menu/breakfast'><Typography variant="h3" align="center">Breakfast</Typography></Link>,
        id: 1,
    },
    {
        title: "Lunch",
        space: 4,
        foodNameImage: "/images/lunch-6",
        link: <Link component={RouterLink} to='menu/lunch'><Typography variant="h3" align="center">Lunch</Typography></Link>,
        id: 2,
    },
    {
        title: "Dinner",
        space: 4,
        foodNameImage: "/images/dinner-1",
        link: <Link component={RouterLink} to='menu/dinner'><Typography variant="h3" align="center">Dinner</Typography></Link>,
        id: 3,
    },
    {
        title: "Dessert",
        space: 6,
        foodNameImage: "/images/dessert-2",
        link: <Link component={RouterLink} to='menu/dessert'><Typography variant="h3" align="center">Dessert</Typography></Link>,
        id: 4,
    },
    {
        title: "Drinks",
        space: 6,
        foodNameImage: "/images/drink-4",
        link: <Link component={RouterLink} to='menu/drinks'><Typography variant="h3" align="center">Drinks</Typography></Link>,
        id: 5,
    }
]

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

export default function Menu()
{
    const classes = userStyles();
    // Load avatar that contains the food images and prices
    return(
        <>
            <Grid container>
                <Grid item xs={12}>
                    <ParallaxBG bg={getImage('/images/bg_4')}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={3}>
                                <Box className={classes.center}>
                                    <Typography variant="h3">
                                        {"Specialties"}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </ParallaxBG>
                </Grid>

            {/* Menu */}
                <Grid container justifyContent="center" alignItems="center" className={classes.wrapper} spacing={4}>

                    <Grid item xs={12}>
                        <Box className={classes.center} m={"5%"}> 
                            <Typography variant="h3">{"Our Menu"}</Typography>
                        </Box>
                    </Grid>

                    {/*Route to menu items when clicked */}
                    <Grid container spacing={4}>
                        {categories.map(item => 
                            <FoodCard key={item.id} title={item.title} gridSize={item.space} foodNameImage={item.foodNameImage}>
                                {item.link}
                            </FoodCard>
                        )}
                    </Grid>
                    
                </Grid>  
            </Grid>
        </>
    )
}