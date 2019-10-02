const style = theme => ({
  headertypo: {
    fontFamily: 'Roboto',
    lineHeight: '3.5rem',
    fontWeight: '400',
    marginTop:'6rem'
  },
  button: {
    color: 'white'
  },
  paragraph: {
    color: 'grey',
    textAlign: 'justify',
    
  },
  Container: {
    marginTop: '5rem'
  },
  imagecontent: {
    height: '350px',
    width: 'auto',
    position: 'relative',
    clipPath: 'polygon(35% 0%, 100% 0, 100% 100%, 25% 100%, 0 46%)'
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  icon: {
    //  display:"inline",
    fontSize: '2rem',
    marginBottom: '10px',
    textAlign: 'left'
  },
  work: {
    marginTop: '3rem',
    width: '100%',
    margin: 0,
    padding: 0
  },
  cardcontent: {
    textAlign: 'Left',
    '&:hover': {
      backgroundColor: '#1e90ff',
      color: 'white'
    }
  },
  // btn: {
  //   color: 'grey'
  // },
  aboutus: {
    marginTop: '2rem'
  },
  typoabout: {
    fontFamily: 'Operator mono',
    marginBottom: theme.spacing() * 5
  },
  typoprinci: {
    fontFamily: 'Operator mono',
    marginBottom: theme.spacing() * 5,
    textAlign: 'end'
  },
  typotesti: {
    fontFamily: 'Operator mono',
    marginBottom: theme.spacing() * 5,
    textAlign: 'center'
  },
  imagesection: {
    height: '350px',
    width: 'auto',
    position: 'relative'
  },
  aboutUsTypo: {
    padding: '2rem'
  },
  description: {
    textAlign: 'justify',
    color: 'gray'
  },

  //sanjay
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    boxShadow: 'none'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: '50'
  },
  name: {
    marginTop: theme.spacing(1)
  },
  specification: {
    color: '#D9D8DB'
  },
  aboutas: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#B9B9BA',
    boxShadow: '1px 1px 3px 1px #D9D8DB'
  },
//   nitin


  cards:{

  "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
      
    }
  
  },


  CardMediasvg:{
    margin: theme.spacing() * 2,
    width: theme.spacing() * 6,
  },
  textField:{
    margin: theme.spacing() * 2,
  },
  btn:{
    margin: theme.spacing() * 1.5,

  },
  contact:{
    color: theme.palette.primary.main,
   
  },

  contacts:{
    fontFamily: 'Operator mono',

    color: theme.palette.primary.main,
    textAlign:'center',
    

  },
  contactIcon:{
   
    color: theme.palette.primary.main,



  }
});

export default style;
