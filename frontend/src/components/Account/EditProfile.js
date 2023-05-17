import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as RouterLink} from 'react-router-dom';
import {Redirect, useParams} from 'react-router-dom';
import authService from '../../service/authorization';


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

export default function EditProfile () {
  const classes = useStyles();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userId, setUserId] = React.useState(useParams());

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  }

  const updateUser = async (e) => {
    e.preventDefault();
    const info = {
      username: username,
      password: password,
    };

    try {
      await authService.updateUser(info, userId);
      setUsername('');
      setPassword('');
      setUserId(null);
      alert('user info has been updated');
      window.location.reload(false);
    }catch(error){
      alert("wrong username or password");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        <strong>
          Update Account Information
        </strong>
      </Typography>
      <form className={classes.form} onSubmit={updateUser}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          onChange={updateUsername}
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
          onChange={updatePassword}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Save Info
        </Button>
      </form>
    </div>
  </Container>
  )
}