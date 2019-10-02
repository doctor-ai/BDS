import React, { Component } from 'react';
import { Typography, Toolbar,Link, AppBar, withStyles,Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import style from './style';



class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.footerBar} position='static'>
        <Toolbar className={classes.navigationBar}>
          <Container maxWidth='lg'>
          <Grid item  xs={12} sm={6} md={6}>
              <div>
          <Grid item  xs={12} sm={4} md={4}>

          <Typography
  component="span"
>
<Link href='#'className={classes.link}>
        Home
      </Link>
</Typography>
</Grid>
<Grid item  xs={12} sm={4} md={4}>
<Link href='#' className={classes.link}>
        About us
      </Link>

</Grid>

<Grid item  xs={12} sm={4} md={4}>

<Typography
  component="span"
>
<Link href='#' className={classes.link}>
        Contact us
      </Link>
</Typography>
</Grid>

</div>

           </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Layout);