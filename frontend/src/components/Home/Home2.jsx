import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AvatarCard from '../AvatarCard/AvatarCard';
import Footer from '../Footer/Footer';
import homeCSS from './home2.css';
import getImage from '../../service/getImage.js';
import Parallax from '../parallax/Parallax';

const people = [
  {
      id: 1,
      person: 1,
      url: "http://localhost:3002/images/person_1.jpg",
      message: "Offers a variety of different dishes"
  },
  {
      id: 2,
      person: 2,
      url: "http://localhost:3002/images/person_2.jpg",
      message: "Dishes are well made and creative"
  },
  {
      id: 3,
      person: 3,
      url: "http://localhost:3002/images/person_3.jpg",
      message: "Highly recommend you try this place."
  },
]

export default function Home2() {
  return(
    <>
      <section className="title_box">
        <div className="bg_overlay">
          <div className="overlay">
            <div className="text_overlay">
              <h2>Welcome To Kusina Cafe</h2>cc
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="center">
          <div>
            <h3>Special Recipe</h3>
            <div className="special_container">
              <Card className="cardBox">
                  <CardMedia image={getImage("images/lunch-4.jpg")} className="cardMedia"/>
                  <CardContent className="cardContent">
                    <Typography align="center" variant="subtitle1" className="textHover">
                      {"Special Kebab"}
                    </Typography>
                  </CardContent>
              </Card>
              <Card className="cardBox">
                <CardMedia image={getImage("images/lunch-6.jpg")} className="cardMedia"/>
                <CardContent>
                  <Typography align="center" variant="subtitle1" className="textHover">
                    {"Special Steak"}
                  </Typography>
                </CardContent>
              </Card>
              <Card className="cardBox">
                <CardMedia image={getImage("images/lunch-7.jpg")} className="cardMedia"/>
                <CardContent>
                  <Typography align="center" variant="subtitle1" className="textHover">
                    {"Special Wing"}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Parallax bg="http://localhost:3002/images/bg_4.jpg">
          <div className="special_container">
            <ul>
              <p>18</p>
              <li>Years of Experience</li>
            </ul>
            <ul>
              <p>20,000</p>
              <li>Happy Customers</li>
            </ul>
            <ul>
              <p>564</p>
              <li>Finished Projects</li>
            </ul>
            <ul>
              <p>300</p>
              <li>Working Days</li>
            </ul>
          </div>
        </Parallax>
      </section>
      <section>
        <div className="center">
          <h2>Reviews</h2>
          <div className="special_container">
            {
              people.map(p =>
              <AvatarCard item={p}/>
              )
            }
          </div>
        </div>
      </section>
      /* Fix this part, causes vertical scroll*/
      <Footer/>
    </>
  )
}