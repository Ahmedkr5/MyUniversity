import React,{useState} from 'react'
import { CardContent, CardMedia, Container, Paper } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import UniversityNav from './UniversityNav';
import { Avatar, Badge, Button, Divider } from '@material-ui/core';
import axios from 'axios';
import { Loading } from './LoadingComponent';
const useStyles = makeStyles((theme)=>({

  Paper:{
      minHeight:400,
    display:'flex',
  },
  Card:{
   minHeight:400,
    width:'30%'

},
Card2:{
  minHeight:600,
   width:'70%'

},
media: {
  height: 250,
},
rad: {
  borderRadius: 20,
  width: theme.spacing(15),
  height: theme.spacing(15),
},


    

}));


export default function UniversityDetail({univ,putUniversity}) {
  const [CoverImage, setCoverImage] = useState('');
  const [open, setOpen] = useState('none');
  const [srcImage, setSrcImage] = useState('a');
  const [selectedCoverImage, setselectedCoverImage] = useState(null);
  const classes = useStyles();
  let history = useHistory();

  if (!univ){
    return (
      <Loading />
  );
    }
    else{
  var image ="http://localhost:5000/uploads/"+univ.image
    function handleClick(event) {
        event.preventDefault();
       history.push('/home')
      }

      const showL = (srci) => {
        setSrcImage(srci);
        setOpen('');
    }
    const onChangeHandler = event => {
      
      setselectedCoverImage(event.target.files[0])
      setCoverImage((event.target.files[0].name))
      //  event.target.files = null
      console.log(event.target.files)
        const data = new FormData()
        data.append('file', event.target.files[0])
        var randomstring = require("randomstring");
        var date = randomstring.generate();
        console.log(event.target.files[0])
        axios.post("http://localhost:5000/upload/" +data, {
        });
      const coverimage1= event.target.files[0].name
      console.log(coverimage1)
        axios
        .put("http://localhost:5000/universities/cover/"+univ._id, {
          image:coverimage1,
        })
        .then(response => {
          console.log(response.data)
          return response.data;
        })
        .then(window.location.reload())
      
    }
   


    return (


        <Container maxWidth="xl" style={{backgroundColor:'#f6f6f6'}}>

<Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Typography color="textPrimary">Details</Typography>
      
    </Breadcrumbs>
    
<Card elevation={1} style={{borderTopRightRadius:"15px",borderTopLeftRadius:"15px",marginTop:"15px"}}>
        <CardMedia
          className={classes.media}
          image={image}
          onClick={() => showL(image)} 
            style={{ maxHeight: '100%', maxWidth: '100%', cursor: 'pointer' }} 
        />
        
           
<input
  accept="image/*"
  style={{ display: 'none'}}
  id="raised-button-file"
  multiple
  type="file"
  onChange={onChangeHandler}
/>
<label htmlFor="raised-button-file">
  <Button style={{backgroundColor:'black',color:'white',opacity:0.5}}         
 component="span" >
    Update Picture
  </Button>
</label> 
 <CardContent style={{display: 'flex',flexDirection:'row', alignItems:'center' }}>
 

 

 <Typography variant="h4" >{univ.name}</Typography>
 </CardContent>

</Card>
<Divider variant="middle" />


    <UniversityNav
                 univ={univ}
                 putUniversity={putUniversity}
                />
</Container>
    )
}
}