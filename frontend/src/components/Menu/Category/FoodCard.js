import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import getImage from '../../../getImage.js';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
    overlay: {
        position: 'relative',
        width: 'inherit',
        height: 'inherit',
        background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))',
    },
    hover: {
        "&& :hover": {
            color: "rgba(255, 122, 71, 0.75)",
            textDecoration: "underline",
        },
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


/**
 * 
 * @param {props} props 
 * @returns food name image
 */
export default function FoodCard(props)
{
    const classes = useStyles();

    return(
        <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card>
                <CardContent className={`${classes.card}`}>
                    <CardMedia image={getImage(props.foodNameImage)} className={classes.media}>
                        <div className={`${classes.overlay} ${classes.center} ${classes.hover} ${classes.colorPrimary}`}>
                            {props.children}
                        </div>
                    </CardMedia>
                </CardContent>
            </Card>
        </Grid>
    )
}

