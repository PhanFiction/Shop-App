import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link as RouterLink} from 'react-router-dom';
import NavLinks from './NavLinks';

import './navbar.css';


export default function Navbar()
{
    return(
        <AppBar position="sticky" className="navbar">
            <Breadcrumbs separator=" ">
                <NavLinks RouterLink={RouterLink}/>
            </Breadcrumbs>
        </AppBar>
    )
}