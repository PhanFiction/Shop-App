import React from 'react';
import Link from '@material-ui/core/Link';

export default function Navs({RouterLink, path, name, color, children})
{
    return(
        <div>
            <Link component={RouterLink} to={path} color={color}>
                {children}
            </Link>
        </div>
    )
}