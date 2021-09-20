import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Link as routerlink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import CartAvatar from '@material-ui/icons/ShoppingCart';

export default function CartIcon()
{
    return(
        <Link component={routerlink} to={"/cart"} color='textPrimary' place="Cart">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                size="medium"
            >
                <CartAvatar/>
            </IconButton>
        </Link>
    )
}