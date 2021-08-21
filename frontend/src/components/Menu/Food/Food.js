import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import getImage from '../../../getImage.js';
import {Link as RouterLink, useRouteMatch} from 'react-router-dom';
import Link from '@material-ui/core/Link';
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

const endPointType = {
    breakfast: 'breakfast',
    lunch: 'lunch',
    dinner: 'dinner',
    dessert: 'dessert',
    drinks: 'drinks',
}

/**
 * 
 * @param {props} props 
 * @returns takes in endpoint, spacing of box, food name image, type of meal (breakfast, lunch, etc)
 */
export default function Food(props)
{
    const classes = useStyles();
    let match = useRouteMatch();
    let endPoint = endPointType[props.ep];
    return(
        <Grid item xs={props.space}>
            <Card>
                <CardContent className={`${classes.card}`}>
                    <CardMedia image={getImage(props.foodNameImage)} className={classes.media}>
                        <div className={`${classes.overlay} ${classes.center} ${classes.hover} ${classes.colorPrimary}`}>
                            <Link component={RouterLink} to={`${match.url}/${endPoint}`}> 
                                <Typography variant="h2" align="center">{props.title}</Typography>  
                            </Link>
                        </div>
                    </CardMedia>
                </CardContent>
            </Card>
        </Grid>
    )
}

