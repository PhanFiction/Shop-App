import React from 'react';
import Link from '@material-ui/core/Link';

export default function NavLinks({RouterLink, Route})
{
    return(
        <div>
            <Link component={RouterLink} to="/" color='textPrimary'> Home </Link>
            <Link component={RouterLink} to="/menu" color='textPrimary'> Menu </Link>
            <Link color='textPrimary'> About </Link>
            <Link color='textPrimary'> Cart </Link>
            <Link color='textPrimary'> Sign Up </Link>
        </div>
    )
}