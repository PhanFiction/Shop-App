import React, {useState, useEffect} from 'react';
import FoodCard from '../FoodCard.js';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router';

// need to pass in an ID to get a specific item. 
export default function Food()
{
    const params = useParams();

    console.log(params);
    return(
        <>
            <Grid container justifyContent="center" alignItems="center">
                <h1>Hello World</h1>
            </Grid>
        </>
    )
}