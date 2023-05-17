import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link as routerlink, Redirect} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import './navbar.css';
import HomeIcon from './HomeIcon/HomeIcon.js';
import ProfileIcon from './ProfileIcon/ProfileIcon.js';
import StoreIcon from './StoreIcon/StoreIcon.js';
import CartIcon from './CartIcon/CartIcon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const pages = ['Home', 'Store', 'Cart', 'Account'];

export default function Navbar({user, setUser, userId, setUserId}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    const login = () => (
      <Link component={routerlink} to={"/user/login"} color='textPrimary' place="Login">
        <AccountCircle />
      </Link>
    )

    const showProfile = () => (
      <div> 
        <Redirect to="/"/>  
        <ProfileIcon user={user} setUser={setUser} userId={userId} setUserId={setUserId}/>
      </div>
    )
    
    return(
      <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Breadcrumbs separator="|">
                <HomeIcon/>
                <StoreIcon/>
                <CartIcon/>
                {user !== null ? showProfile(): login()}
              </Breadcrumbs>
            </Box>
        </Container>
      </AppBar>
      </>
    )
}