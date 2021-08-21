import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    parallax : props => {
        return {
            backgroundImage: `url(${props.bg}), linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))`,
            height: 200,
            backgroundBlendMode: 'overlay',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color:"white",
        }
    },
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
});

const Parallax = (props) => {
    // linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))

    const classes = useStyles(props);

    return(
        <div className={`${classes.center} ${classes.parallax}`}>
            {props.children}
        </div>
    )
}

export default Parallax;