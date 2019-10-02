import React, { Component } from 'react';
import { withStyles,
  Typography,
  Button,
  Container,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Card} from '@material-ui/core';
 

import style from './style';
import { Header } from 'Components';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
      
       
             <Container className={classes.main} maxWidth='md'>
          <Grid container  spacing={4}>
          <Grid item xs={12}  md={4}>
                  <Card className={classes.card}>
                  <CardMedia
        className={classes.CardMedia}
          component="img"
          alt="stretcher "
          image="images/stretcher.svg"
          title=" stretcher"
        />
                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5'>Our 100+ Stretcher</Typography>
                      <div>
                        <p>A hospital is health care institution providing patient treatment with specialized medical. </p>
                      </div>
                    </CardContent>
                    <CardActions>
                      <Button
                       
                      
                        className={classes.button}
                       
                      >
                         Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12}  md={4}>
                  
                  <Card className={classes.card}>
                  
        <CardMedia
        className={classes.CardMedia}
          component="img"
          alt="ambulance "
          image="images/ambulance.svg"
          title=" ambulance"
        />

                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5'>24 Hours Services</Typography>
                      <div>
                        <p>A teaching hospital combines assitance to provide with teaching to medical stuent and nurse.</p>
                      </div>
                    </CardContent>
                    <CardActions>
                    <Button
                        
                        className={classes.button}
                        
                     > Read More
                       </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12}  md={4}>
                  <Card className={classes.card}>
                  <CardMedia
        className={classes.CardMedia}
          component="img"
          alt="protection "
          image="images/protection.svg"
          title=" protection"
        />
                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5'>High Tech  Aqiupment</Typography>
                      <div>
                        <p> Some hospitals have outpaintent departments and some have chronic treatment unit.</p>
                      </div>
                    </CardContent>
                    <CardActions>
                      <Button
                        
                       className={classes.button}
                       
                      >
                      Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

            
          </Grid>
      


        </Container>
        <Typography variant='h2'>About</Typography>
        {/* cfvgyhuji */}
        <div className={classes.about} >
        <Container className={classes.container} maxWidth='md'>

        <Grid container  spacing={4}>
        <Grid item xs={12} sm={6}>
          <div>
<img src="images/joging.png.jpg" alt="joging"/>  

          </div>
          
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant='h4'>Dr.Lavanya Sadanana</Typography>
<div>
<Typography variant='h6'>Founder,Senior Doctor,SLK hospital</Typography></div>
<div>
  <p>We are 10 sparkling minds exporting human communication via digital assets. Our agency is based in London,
    so we are pretty fancy looking. Also we put maximum effort to achieve set goals and we make sure our client got what he
  </p>
</div>
<Button
                        
                        className={classes.btn}
                        
                       >
                      Details >
                       </Button>
        </Grid>
 </Grid>
        </Container>
        </div>
        {/* pribvc */}
        <div className={classes.OurPrinciple} >
        <Container className={classes.container} maxWidth='md'>

        <Grid container  spacing={4}>
        
        <Grid item xs={12} sm={6}>
        <Typography variant='h4'>What we do</Typography>

<div>
  <p>We are 10 sparkling minds exporting human communication via digital assets. Our agency is based in London,
    so we are pretty fancy looking. Also we put maximum effort to achieve set goals and we make sure our client got what he desrves
  </p>
</div>
<Button
                        
                        className={classes.btn}
                        
                       >
                      Details >
                       </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
<img src="images/joging.png.jpg" alt="joging"/>  

          </div>
          
        </Grid>
 </Grid>
        </Container>
        </div>
        </div>
       
  
    );
  }
}

export default withStyles(style)(Layout);
