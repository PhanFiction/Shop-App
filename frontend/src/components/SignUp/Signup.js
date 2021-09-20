import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as RouterLink} from 'react-router-dom';
import signup from '../../service/signup.js';


const useStyles = makeStyles({
  paper: {
    marginTop: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '1%',
  },
  form: {
    width: '100%',
    marginTop: '3%',
  },
  submit: {
      marginTop: "3%",
  },
});

export default function SignUp() {

  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
        const account = {
            username: username,
            name: name,
            password: password
        }

        const createAccount = await signup(account);

        if(createAccount) alert('successfully created account');

        setUsername('');
        setName('');
        setPassword('');

    }catch(error){
      alert('could not sign up');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSignup}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="username"
                name="username"
                required
                id="username"
                label="Username"
                onChange={(event)=> setUsername(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={(event)=> setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event)=> setPassword(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link component={RouterLink} to={`user/login`}variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}