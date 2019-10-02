import React, { Component } from "react";
import { withStyles, Typography, Grid, Container, Button, Card, CardContent } from "@material-ui/core";
import SingleBedIcon from '@material-ui/icons/SingleBed';
import style from "./style";
import { Header } from "Components";
import { lineHeight } from "@material-ui/system";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <Header />
        <Container maxWidth="lg" className={classes.Container}  >
          <Grid container spacing={4}>
            <Grid item xs={12} md={8} lg={8}>
              <Typography variant="h3" className={classes.headertypo}>
                Top Class <span style={{ color: "#1e90ff" }}>Health </span>
                <br />
                <span style={{ color: "#1e90ff" }}>Care</span> Hospital
              </Typography>
              <p className={classes.paragraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <Button variant="contained" color="primary" className={classes.button}>
                Know More
      </Button>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes.imagecontent}>
                <img src="/images/dr.jpg" alt="headerimage" className={classes.image} />
              </div>
            </Grid>
          </Grid>
          {/* second Grid */}
          <Container maxWidth="lg" className={classes.work}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                <Card>
                  <div className={classes.cardcontent}>
                    <CardContent>
                      <div className={classes.cardcontent}>
                        <CardContent >
                          <SingleBedIcon className={classes.icon} />
                          <Typography variant="h6">
                            Our 100+ Stretcher
                    </Typography>
                          <p>
                            A hospital is health care institution providing patient treatment with specialized medical.
                    </p>
                          <a href="#" >
                            <Button className={classes.btn}>Know More
                     </Button>
                          </a>
                        </CardContent>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card>
                  <div className={classes.cardcontent}>
                    <CardContent>
                      <div className={classes.cardcontent}>
                        <CardContent >
                          <SingleBedIcon className={classes.icon} />
                          <Typography variant="h6">
                            High Tech  Aqiupment
                    </Typography>
                          <p>
                            e are 10 sparkling minds exporting human communication via digital assets.,
                    </p>
                          <a href="#" >
                            <Button className={classes.btn}>Know More
                     </Button>
                          </a>
                        </CardContent>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card>
                  <div className={classes.cardcontent}>
                    <CardContent>
                      <div className={classes.cardcontent}>
                        <CardContent >
                          <SingleBedIcon className={classes.icon} />
                          <Typography variant="h6">
                            24 Hours Services
                    </Typography>
                          <p>
                            Some hospitals have outpaintent departments and some have chronic treatment unit.
                    </p>
                          <a href="#" >
                            <Button className={classes.btn}>Know More
                     </Button>
                          </a>
                        </CardContent>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
        <Container maxWidth="lg" className={classes.aboutus}>
          <Typography variant="h4" className={classes.typo}>
            --About Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <div className={classes.imagesection}>
                <img src="/images/header.jpg" alt="headerimage" className={classes.image} />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className={classes.aboutUsTypo}>
                <Typography variant="h5" style={{marginBottom:"0.4rem"}}>
                  Dr.Robert Sadanana And Team
                  </Typography>
                <div style={{ color: "gray", fontFamily: "Roboto", fontSize: "1rem",marginBottom:"2rem"}}>
                  Senior Doctor,SLK hospital
                  </div>
                <p className={classes.description}>
                  We are 10 sparkling minds exporting human communication via digital assets. Our agency is based in London,
                   so we are pretty fancy looking. Also we put maximum effort to achieve set goals and we make sure our client got what he
                </p>
                <Button variant="contained" color="primary" style={{marginTop:"1rem"}}>
                  Details
               </Button>
              </div>
            </Grid>
          </Grid>
        </Container>

      </div>
    );
  }
}

export default withStyles(style)(Layout);
