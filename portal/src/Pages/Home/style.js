import { border } from "@material-ui/system";

const style = theme => ({
  headertypo:{
    fontFamily:"Roboto",
    lineHeight:"3.5rem",
    fontWeight:"400"
  },
  button:{
    color:"white"
  },
  paragraph:{
    color:"grey",
    textAlign:"justify"
  },  
  Container:{
    marginTop:"5rem"
  },
  imagecontent:{   
    height:"350px",
    width:"auto",
    position:"relative",
    clipPath: "polygon(35% 0%, 100% 0, 100% 100%, 25% 100%, 0 46%)",
  },
  image:{
    height:"100%",
    width:"100%",
    position:"absolute",
  },
 icon:{
  //  display:"inline",
   fontSize:"2rem",
   marginBottom:"10px",
   textAlign:"left"
  },
  work:{
    marginTop:"3rem",
    width:"100%",
    margin:0,
    padding:0,
  },
  cardcontent:{  
    textAlign:"Left",
    "&:hover": {
      backgroundColor: "#1e90ff",
      color:"white",
    }
  },
  btn:{
    color:"grey",
  },
  aboutus:{
    marginTop:"2rem",
  },
  typo:{
    fontFamily:"Operator mono",
    marginBottom:theme.spacing() * 5,
  },
  imagesection:{
    height:"350px",
    width:"auto",
    position:"relative",
  },
  aboutUsTypo:
  {
    padding:"2rem"
  },
  description:
  {
    textAlign:"justify",
    color:"gray"
  }
});

export default style;
