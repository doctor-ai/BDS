const style = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
    
  },
  main:{
    margin: theme.spacing() * 1,

  },
  about:{
    margin: theme.spacing() * 1,
  
  },
  card:{

  "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
      
    }
  
  },

 
  btn:{
    backgroundColor: theme.palette.primary.main,

  },
  CardMedia:{
    margin: theme.spacing() * 2,
    width: theme.spacing() * 6,
   
  
  }
 

}); 

export default style;
