import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link as routerlink, Redirect} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import './navbar.css';
import HomeIcon from './HomeIcon/HomeIcon.js';
import ProfileIcon from './ProfileIcon/ProfileIcon.js';
import MenuIcon from './MenuIcon/MenuIcon.js';
import CartIcon from './CartIcon/CartIcon';

export default function Navbar({user, setUser})
{    

    // same as { return () }
    const login = () => (
        <Link component={routerlink} to={"/user/login"} color='textPrimary' place="Login">
            Login
        </Link>
    )

    const showProfile = () => (
        <div> 
            <Redirect to="/"/>  
            <ProfileIcon user={user} setUser={setUser}/>
        </div>
    )
    
    return(
        <>
        <AppBar position="sticky" className="navbar">
            <Breadcrumbs separator=" ">
                <HomeIcon/>
                <MenuIcon/>
                <CartIcon/>
                {user !== null ? showProfile(): login()}
            </Breadcrumbs>
        </AppBar>
        </>
    )
}