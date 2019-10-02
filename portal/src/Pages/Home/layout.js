import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  CardContent,
  Card,
  Grid,
  Container,
  Avatar
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import style from './style';
import { Header } from 'Components';

const cards = [1, 2, 3];

const user = {
  name: 'Sanjay Jadav',
  avatar: 'download.jpeg',
  bio: 'Venom'
};

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <Typography variant='body1'>Home Screen</Typography>
        <Container className={classes.cardGrid} maxWidth='md'>
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
                      This is a media card. You can use this section to describe
                      the content.
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
