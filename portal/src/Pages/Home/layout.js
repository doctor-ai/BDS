import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  Grid,
  Container,
  CardActions,
  CardMedia,
  Button,
  Card,
  CardContent,
  Avatar,
  TextField
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import style from './style';
import { Header,Footer } from 'Components';
import { Link as RouterLink } from 'react-router-dom';

const cards = [1, 2, 3];

const user = {
  name: 'Sunny Lione',
  avatar: '/images/sunny.jpg',
  bio: 'kishan'
};

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <Container maxWidth='lg' className={classes.Container}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8} lg={8}>
              <Typography variant='h3' className={classes.headertypo}>
                Top Class <span style={{ color: '#1e90ff' }}>Health </span>
                <br />
                <span style={{ color: '#1e90ff' }}>Care</span> Hospital
              </Typography>
              <p className={classes.paragraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
              >
                Know More
              </Button>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.imagecontent}>
                <img
                  src='/images/dr.jpg'
                  alt='headerimage'
                  className={classes.image}
                />
              </div>
            </Grid>
          </Grid>
          {/* second Grid */}
          <Container className={classes.Container} maxWidth='lg'>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <Card className={classes.cards}>
                  <CardMedia
                    className={classes.CardMediasvg}
                    component='img'
                    alt='stretcher '
                    image='images/stretcher.svg'
                    title=' stretcher'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5'>Our 100+ Stretcher</Typography>
                   <p>
                        A hospital is health care institution providing patient
                        treatment with specialized medical.{' '}
                      </p>
                  </CardContent>
                  <CardActions>
        
                    <Button className={classes.buttons} >Read More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Card className={classes.cards}>
                  <CardMedia
                    className={classes.CardMediasvg}
                    component='img'
                    alt='ambulance '
                    image='images/ambulance.svg'
                    title=' ambulance'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5'>24 Hours Services</Typography>
                      <p>
                        A hospital combines assitance to provide with
                        teaching to medical student and nurse.
                      </p>
                  
                  </CardContent>
                  <CardActions>
                    <Button className={classes.buttons}> Read More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Card className={classes.cards}>
                  <CardMedia
                    className={classes.CardMediasvg}
                    component='img'
                    alt='protection '
                    image='images/protection.svg'
                    title=' protection'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5'>High Tech Aqiupment</Typography>
                    <p>
                        {' '}
                        Some hospitals have outpaintent departments and some
                        have chronic treatment unit.
                      </p>
                   
                  </CardContent>
                  <CardActions>
                    <Button className={classes.button}>Read More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
        <Container maxWidth='lg' className={classes.aboutus}>
          <Typography variant='h4' className={classes.typoabout}>
            --About Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <div className={classes.imagesection}>
                <img
                  src='/images/header.jpg'
                  alt='headerimage'
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className={classes.aboutUsTypo}>
                <Typography variant='h5' style={{ marginBottom: '0.4rem' }}>
                  Dr.Robert Sadanana And Team
                </Typography>
                <div
                  style={{
                    color: 'gray',
                    fontFamily: 'Roboto',
                    fontSize: '1rem',
                    marginBottom: '2rem'
                  }}
                >
                  Senior Doctor,SLK hospital
                </div>
                <p className={classes.description}>
                  We are 10 sparkling minds exporting human communication via
                  digital assets. Our agency is based in London, so we are
                  pretty fancy looking. Also we put maximum effort to achieve
                  set goals and we make sure our client got what he
                </p>
                <Button
                  variant='contained'
                  color='primary'
                  style={{ marginTop: '1rem' }}
                >
                  Details
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth='lg' className={classes.aboutus}>
          <Typography variant='h4' className={classes.typoprinci}>
            --Our principles
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <div className={classes.aboutUsTypo}>
                <Typography variant='h5' style={{ marginBottom: '3.5rem' }}>
                  What we do
                </Typography>
                <p className={classes.description}>
                  We are 10 sparkling minds exporting human communication via
                  digital assets. Our agency is based in London, so we are
                  pretty fancy looking. Also we put maximum effort to achieve
                  set goals and we make sure our client got what he
                </p>
                <Button
                  variant='contained'
                  color='primary'
                  style={{ marginTop: '1rem' }}
                >
                  Details
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className={classes.imagesection}>
                <img
                  src='/images/het.webp'
                  alt='headerimage'
                  className={classes.image}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth='lg'>
          <Typography variant='h4' className={classes.typotesti}>
            Testimonials
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Avatar
                    alt='Person'
                    className={classes.avatar}
                    component={RouterLink}
                    src={user.avatar}
                    // to='/settings'
                  />
                  <Typography className={classes.name} variant='h5'>
                    {user.name}
                  </Typography>
                  <Typography className={classes.specification} variant='1px'>
                    {user.bio}
                  </Typography>
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.aboutas}>
                      We are 10 sparkling minds exporting human communication
                      via digital assets. Our agency is based in London, so we
                      are pretty fancy
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* contact start */}
        <Container className={classes.cardGrid} maxWidth='lg'>
         
        
          <Grid container spacing={2}>
              <Grid item  xs={12} sm={4} md={4}>
              <Typography variant='h5' className={classes.contacts}>
              CONTACT INFO
             </Typography>
             <br/>
             <div>
            <Grid item  xs={12} sm={12} md={12}>

                 <PhoneIcon  className={classes.contactIcon}/>
             <Typography variant='h5' className={classes.contact}>
              PHONE NUMBER
             </Typography>
             <p>1428415215</p>
             </Grid>
            <Grid item  xs={12} sm={12} md={12}>

             <EmailIcon  className={classes.contactIcon}/>
             <Typography variant='h5' className={classes.contact}>
              EMAIL ADDRESS
             </Typography>
             <p>demo123@gmail.com</p>
             </Grid>
            <Grid item  xs={12} sm={12} md={12}>

             <LocationOnIcon  className={classes.contactIcon}/>
             <Typography variant='h5' className={classes.contact} >
             ADDRESS INFO
             </Typography>
             <p>gandhinagar sk patet ,384456</p>
             </Grid>

             </div>
            </Grid>

            <Grid item  xs={12} sm={8} md={8}>
              <Typography variant='h5' className={classes.contacts}>
             GET IN TOUCH
             </Typography>
             <br/>
             <div>
            <Grid item  xs={12} sm={12} md={12}>

            <TextField
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                id="Name"
                placeholder="Name"
                name="Name"
                autoComplete="Name"
              />
      </Grid>
            <Grid item  xs={12} sm={12} md={12}>
            <TextField
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                id="Email"
                placeholder="Email"
                name="Email"
                autoComplete="Email"
              />
      </Grid>
            <Grid item  xs={12} sm={12} md={12}>
            <TextField
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                id="Phone"
                placeholder="Phone"
                name="Phone"
                autoComplete="Phone"
              />
      </Grid>
      <Grid item  xs={12} sm={12} md={12}>
      <TextField
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                id="message"
                placeholder="message"
                name="message"
                autoComplete="message"
              />
      </Grid>
      <Button
                  variant='contained'
                  color='primary'
                  className={classes.btn}
               
                >
                  Submit
                </Button>
      
             </div>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default withStyles(style)(Layout);
