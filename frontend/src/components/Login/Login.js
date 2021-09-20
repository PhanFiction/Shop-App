import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as RouterLink} from 'react-router-dom';
import loginService from '../../service/login.js';

const useStyles = makeStyles({
    paper: {
      marginTop: '8%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: '1%',
      backgroundColor: 'white',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: '1%',
    },
    submit: {
      marginTop: '2%',
      marginBottom: '2%',
    },
  });


export default function Login() {

  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const userInfo = {
      username,
      password
    }

      try {
        const user = await loginService.login(userInfo);
        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        setUsername('');
        setPassword('');
        alert('logged in success');
        refreshPage();

      }catch(error){
        alert("wrong username or password");
      }
  }  
  
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={handleUsername}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link component={RouterLink} to={`/signup`}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }