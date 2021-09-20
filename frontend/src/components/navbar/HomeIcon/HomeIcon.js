import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Link as routerlink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import HomeAvatar from '@material-ui/icons/Home';

export default function HomeIcon()
{
    return(
        <Link component={routerlink} to={"/"} color='textPrimary' place="Home">
            <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            size="medium"
          >
            <HomeAvatar />
          </IconButton>
        </Link>
    )
}