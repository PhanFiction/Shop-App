import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link as RouterLink} from 'react-router-dom';
import Navs from './Navs';

import './navbar.css';

const navs = [
    {path: "/", color: 'textPrimary', place: "Home", id: 1},
    {path: "/menu", color: 'textPrimary', place: "Menu", id: 2},
    {path: "/cart", color: 'textPrimary', place: "Cart", id: 3},
    {path: "/singup", color: 'textPrimary', place: "Sign Up", id: 4},
    {path: "/about", color: 'textPrimary', place: "About", id: 5}
]
export default function Navbar()
{
    return(
        <AppBar position="sticky" className="navbar">
            <Breadcrumbs separator=" ">
                {navs.map(item => 
                    <Navs key={item.id} RouterLink={RouterLink} path={item.path} color={item.color}>
                        {item.place}
                    </Navs>
                )}
            </Breadcrumbs>
        </AppBar>
    )
}