import React from 'react';
import { makeStyles } from '@material-ui/core';

const footerStyles = makeStyles({
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: "3rem",
    gap: "10rem",
    '@media (max-width: 720px)': {
      flexDirection: "column",
      alignItems: "center",
      gap: 0,
      '&& > div > h5': {
        textAlign: "center",
      },
    },
    '&& > div > h5': {
      fontSize: "1.3em",
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
    textAlign: "left"
  },
  footerContent: {
    display: "flex",
    flexDirection: "row",
    '&& > ul': {
      padding: 0,
      margin: 0,
    },
    '&& > ul > li': {
      marginRight: "2rem",
      listStyle: "none",
      lineHeight: "1.5rem",
    },
  }
});

export default function Footer(props) {
  const classes = footerStyles();
    return(
      <footer className={`${classes.footer} ${classes.center}`}>
        <div>
          <h5>Kusina</h5>
          <p>Check our Social Media for more information about us</p>
        </div>
        <div>
          <h5>Hours</h5>
          <div className={`${classes.footerContent}`}>
            <ul>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
            <ul>
              <li>9:00 am - 5:00 pm</li>
              <li>9:00 am - 5:00 pm</li>
              <li>9:00 am - 5:00 pm</li>
              <li>9:00 am - 5:00 pm</li>
              <li>9:00 am - 5:00 pm</li>
              <li>Closed</li>
              <li>Closed</li>
            </ul>
          </div>
        </div>
      </footer>
    )
}