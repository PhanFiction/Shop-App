import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AvatarCard from './AvatarCard/AvatarCard';
import Footer from './Footer/Footer';
import './home.css';

const people = [
    {
        person: 1,
        url: "http://localhost:3002/images/person_1.jpg",
        message: "Offers a variety of different dishes"
    },
    {
        person: 2,
        url: "http://localhost:3002/images/person_2.jpg",
        message: "Dishes are well made and creative"
    },
    {
        person: 3,
        url: "http://localhost:3002/images/person_3.jpg",
        message: "Food offered here is the best. Highly recommend you try this place."
    },

]

export default function Home() 
{
    return(
        <>
            <Grid container alignItems="center">
                <Grid item xs={6}>
                    <section className="section-box">
                        <div className="box1">
                            <Typography align="left" variant="h3" paragraph>
                                {"Eat Healthy"} 
                            </Typography>
                            <Typography align="left" variant="h3" paragraph>
                                {"and Natural Food"}
                            </Typography>
                            <Typography align="left" variant="subtitle1">
                                {"A place where you can purchase a variety of food anywhere and anytime"}
                            </Typography>
                        </div>
                    </section>
                </Grid>
                <Grid item xs={6}>
                    <div className="imageBox">
                        <img className="img1" src="http://localhost:3002/images/bg_2.jpg" alt="bg"/>
                    </div>
                </Grid>
                </Grid>
                
                {/* Second Box */}
                <Grid container alignItems="center">
                    {/*Image left side*/}
                    <Grid item xs={6}>
                        <div className="imageBox">
                            <img className="img2" src="http://localhost:3002/images/about.jpg" alt="about"/>
                        </div>
                    </Grid>
                    {/* Text Box containing images and text */}
                    <Grid item xs={6}>
                        <section className="section-box">
                            <Typography align="left" variant="h4" paragraph style={{fontWeight: 600}}>
                                {"Welcome To Kusina Restaurant"}
                            </Typography>
                            <Typography align="left" variant="subtitle1" paragraph style={{marginBottom: "3em"}}>
                                {"Kusina Restaurant offers a variety of food that you can purchase"}
                            </Typography>
                            <div className="card-container">
                                <Typography align="left" variant="h4" paragraph>
                                    {"Special Recipe"}
                                </Typography>
                                {/* Box of images with names below it*/}
                                <span className="span-container spaceAround">
                                    <Card className="cardBox">
                                        <CardMedia image="http://localhost:3002/images/lunch-4.jpg" className="cardMedia"/>
                                        <CardContent className="cardContent">
                                            <Typography align="center" variant="subtitle1" className="textHover">
                                                {"Special Kebab"}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className="cardBox">
                                        <CardMedia image="http://localhost:3002/images/lunch-6.jpg" className="cardMedia"/>
                                        <CardContent>
                                            <Typography align="center" variant="subtitle1" className="textHover">
                                                {"Special Steak"}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className="cardBox">
                                        <CardMedia image="http://localhost:3002/images/lunch-7.jpg" className="cardMedia"/>
                                        <CardContent>
                                            <Typography align="center" variant="subtitle1" className="textHover">
                                                {"Special Wing"}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </span>
                            </div>
                        </section>
                    </Grid>
                </Grid>

                {/* Thid box */}
                <Grid container align="center">
                    <Grid item xs={12}>
                        <div className="parallax">
                            <span className="span-container center">
                                <Card className="cardBox">
                                    <CardContent>
                                        <span className="counter">18</span>
                                        <Typography variant="subtitle1" className="overrideBox">
                                            {"Years of Experience"}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card className="cardBox">
                                    <CardContent>
                                        <span className="counter">20,000</span>
                                        <Typography variant="subtitle1" className="overrideBox">
                                            {"Happy Customers"}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card className="cardBox">
                                    <CardContent>
                                        <span className="counter">564</span>
                                        <Typography variant="subtitle1" className="overrideBox">
                                            {"Finished Projects"}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card className="cardBox">
                                    <CardContent>
                                        <span className="counter">300</span>
                                        <Typography variant="subtitle1" className="overrideBox">
                                            {"Working Days"}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </span>
                        </div>
                    </Grid>
                </Grid>
            {/*Box 5 Famous dishes */}
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <div className="userBox">
                        <Typography variant="h4" align="center">
                            {"User Reviews"} 
                        </Typography>
                        <Carousel navButtonsAlwaysInvisible>
                            {people.map((item, i) => <AvatarCard key={i} item={item}/>)}
                        </Carousel>
                    </div>
                </Grid>
            </Grid>
            
            {/* Footer*/}
            <Footer/>
        </>
    )
}