import React, { Component } from 'react';
import { Typography, AppBar, Toolbar, withStyles,Button } from '@material-ui/core';

import style from './style';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
  
      <AppBar position="static"   style={{ background: 'transparent', boxShadow: 'none',color:"gray"}} >
        <Toolbar className={classes.Toolbar}>  
          <Typography variant="h6" className={classes.title} style={{fontWeight:"bold"}}>
            HOME
          </Typography>
          <Typography variant="h6" className={classes.title}>
            ABOUT US
          </Typography>
          <Typography variant="h6" className={classes.title}>
            CONTACT
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Layout);
