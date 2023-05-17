import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link as RouterLink, Redirect} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '2%',
  },
  title: {
    flexGrow: 1,
  },
});

export default function ProfileIcon({user, setUser, userId, setUserId}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleSignout = () => {
    window.localStorage.removeItem("loggedUser");
    setUser(null);
    setUserId(null);
    refreshPage();
    return (
      <Redirect to="/"/>
    )
  }

  return (
    <div className={classes.root}>
      {user && (
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            size="medium"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <Link component={RouterLink} to={`/user/${userId}`} color='textPrimary'>
              My account
            </Link>
            <MenuItem onClick={handleSignout}> Sign out </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}