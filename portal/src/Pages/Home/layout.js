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
  Avatar
} from '@material-ui/core';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import style from './style';
import { Header } from 'Components';
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
      <div className={classes.header}>
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
          <Container className={classes.main} maxWidth='lg'>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.CardMedia}
                    component='img'
                    alt='stretcher '
                    image='images/stretcher.svg'
                    title=' stretcher'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5'>Our 100+ Stretcher</Typography>
                    <div>
                      <p>
                        A hospital is health care institution providing patient
                        treatment with specialized medical.{' '}
                      </p>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button className={classes.button}>Read More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.CardMedia}
                    component='img'
                    alt='ambulance '
                    image='images/ambulance.svg'
                    title=' ambulance'
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5'>24 Hours Services</Typography>
                    <div>
                      <p>
                        A teaching hospital combines assitance to provide with
                        teaching to medical stuent and nurse.
                      </p>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button className={classes.button}> Read More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.CardMedia}
                    component='img'
                    alt='protection '
                    image='images/protection.svg'
                    title=' protection'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5'>High Tech Aqiupment</Typography>
                    <div>
                      <p>
                        {' '}
                        Some hospitals have outpaintent departments and some
                        have chronic treatment unit.
                      </p>
                    </div>
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
      </div>
    );
  }
}

export default withStyles(style)(Layout);
