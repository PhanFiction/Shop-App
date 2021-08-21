import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ParallaxBG from './parallax/Parallax.js';
import getImage from '../../getImage.js';
import Typography from '@material-ui/core/Typography';
import Food from './Food/Food.js';

import { makeStyles } from '@material-ui/core';

const userStyles = makeStyles({
    center: {
        display: "flex",
        alignItems:"center",
        justifyContent: "center"
    },
    wrapper: {
        margin: "5%"
    },
    link: {
        width: 500,
        height: 300,
        backgroundColor: 'green'
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
                    <ParallaxBG bg={getImage('bg_4')}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={3}>
                                <Typography variant="h3">
                                    {"Specialties"}
                                </Typography>
                            </Grid>
                        </Grid>
                    </ParallaxBG>
                </Grid>

            {/* Menu */}
                <Grid container justifyContent="center" alignItems="center" className={classes.wrapper} spacing={4}>

                    <Grid item xs={12}>
                        <Box className={classes.center} m={"5%"}> 
                            <Typography variant="h4">{"Our Menu"}</Typography>
                        </Box>
                    </Grid>

                    {/*Route to menu items when clicked */}
                    <Grid container spacing={4}>
                        <Food title="Breakfast" space={4} foodNameImage="breakfast-9" ep={'breakfast'}/>   
                        <Food title="Lunch" space={4} foodNameImage="lunch-6" ep={'lunch'}/>
                        <Food title="Dinner" space={4} foodNameImage="dinner-1" ep={'dinner'}/>
                        <Food title="Dessert" space={6} foodNameImage="dessert-2" ep={'dessert'}/>
                        <Food title="Drinks" space={6} foodNameImage="drink-4" ep={'drinks'}/>    
                    </Grid>
                    
                </Grid>  
            </Grid>
        </>
    )
}