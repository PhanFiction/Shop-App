import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Link as routerlink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import StoreAvatar from '@material-ui/icons/Store';

export default function MenuIcon()
{
    return(
        <Link component={routerlink} to={"/menu"} color='textPrimary' place="Menu">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                size="medium"
            >
                <StoreAvatar/>
            </IconButton>
        </Link>
    )
}