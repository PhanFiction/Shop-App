import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';

const avatarStyles = makeStyles({
    root: {
        backgroundColor: "transparent",
        boxShadow: "none",
        height: "auto",
        marginTop: "5%"
    },
    cardBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    large: {
        width: "5em",
        height: "5em",
        alignItems: "center",
    },
    span: {
        marginTop: "3%"
    }
})

export default function AvatarCard(props)
{
    const classes = avatarStyles();
    
    return(
        <>
            <Card className={classes.root}>
                <CardContent className={classes.cardBox}>
                    <Avatar src={props.item.url} className={classes.large}/>
                    <span className={classes.span}>
                        <Typography variant="subtitle1">
                            {props.item.message}
                        </Typography>
                    </span>
                </CardContent>
            </Card>
        </>
    )
}