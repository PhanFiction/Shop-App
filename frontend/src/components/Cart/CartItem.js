import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';
import getImage from '../../service/getImage.js';


const styles = makeStyles({
    media: {
        height: 140,
    },
    card: {
        width: 350
    },
    button: {
        padding: "5% 0 0 0"
    },
    text:{
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
})

export default function CartItem(props)
{
    const cartStyles = styles();
    
    let img = null;
    props.imageName === undefined ? img="https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg" : img = getImage(props.imageName);
    

    return(
        <Grid item xs={12}>
            <Card className={cartStyles.card}>
                <CardMedia
                    image={img} title={props.name} className={cartStyles.media}
                />
                <CardContent>
                    <Typography component="div">
                        <div className={cartStyles.text}>
                            <Typography component="h6" variant="h6">
                                {props.name}
                            </Typography>
                            <Typography component="h6" variant="h6">
                                Price: {props.price}
                            </Typography>
                        </div>
                    </Typography>
                    <CardActions className={cartStyles.button}>
                        <Button size="small" variant="outlined" onClick={()=>{props.subtractItem(props.id)}}>
                            <RemoveIcon/>
                        </Button>

                        <Typography component="h6" variant="h6">
                            {props.quantity}
                        </Typography>

                        <Button size="small" variant="outlined" onClick={()=>{props.addItem(props.id)}}>
                            <AddIcon/>
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}