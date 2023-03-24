import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ListItemText from '@material-ui/core/ListItemText';

const footerStyles = makeStyles({
  footer: {
    backgroundColor: "black",
    color: "white",
  },
  content: {
    paddingTop:"5%",
    paddingBottom:"5%"
  }
});

export default function Footer2(props) {
  const classes = footerStyles();
    return(
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" className={classes.content}>
          <Grid item xs={6}>
            <Typography variant="h6" paragraph>
              {"Kusina"}
            </Typography>
            <Typography variant="subtitle1">
              {"Check our Social Media for more information about us"}
            </Typography>
            </Grid>
              <Grid item xs={6}>
                  <Typography variant="h6" paragraph>
                    {"Hours"}
                  </Typography>
                  <Grid container>
                    <Grid item xs={4}>
                      <ListItemText primary="Monday"/>
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText primary="9:00 am - 5:00 pm"/>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <ListItemText primary="Tuesday"/>
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText primary="9:00 am - 5:00 pm"/>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <ListItemText primary="Wednesday"/>
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText primary="9:00 am - 5:00 pm"/>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <ListItemText primary="Thursday"/>
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText primary="9:00 am - 5:00 pm"/>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <ListItemText primary="Friday"/>
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText primary="9:00 am - 5:00 pm"/>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <ListItemText primary="Saturday"/>
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText primary="Closed"/>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <ListItemText primary="Sunday"/>
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText primary="Closed"/>
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
          </Container>
      </footer>
    )
}