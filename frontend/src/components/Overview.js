import React from 'react';
import { Cake, Home} from '@material-ui/icons';
import { Container, Divider,  Typography } from '@material-ui/core';
import { Col, Row } from 'reactstrap';
import SchoolIcon from '@material-ui/icons/School';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
export default function Overview({univ}) {
    return (
        <Container style={{borderRadius: '10px',marginTop:5  ,backgroundColor:"white",minHeight:200}}>
    <Row>
    <div className="col-md-6 " style={{height:'auto',wordWrap:'break-word',marginTop:15}} >
      <Typography variant="h5">
      About: 
      </Typography>
    <p>{univ.description}</p>
   
     
    </div>
    
    <Divider orientation="vertical" />
    <Col md={5}>
    <div className="row justify-content-center" style={{marginTop:15}}>
      <div className="col-md-5 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      
      <Home color="primary" style={{marginRight:"10px"}} />
      <Typography variant="h6">
      Adress
      </Typography>
      </div>
      <div className="col-md-7 "style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
      <Typography>
      {univ.Location}
      </Typography>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-5 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      <SchoolIcon color="primary" style={{marginRight:"10px"}} />
      <Typography  variant="h6">
      Program
      </Typography>
      </div>
      <div className="col-md-7 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      <Typography>
      {univ.Program}
      </Typography>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-5 " style={{display:"flex",flexDirection:"row"  , alignItems:"center"}}  >
      <MonetizationOnIcon color="primary" style={{marginRight:"10px"}} />
      <Typography  variant="h6">
      Price
      </Typography>
      </div>
      <div className="col-md-7 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
      <Typography>
      {univ.price}
      </Typography>
      </div></div>
      <div className="row justify-content-center">
      <div className="col-md-5 " style={{display:"flex",flexDirection:"row"  , alignItems:"center"}}  >
      <HourglassFullIcon color="primary" style={{marginRight:"10px"}} />
      <Typography  variant="h6">
      Length(year)
      </Typography>
      </div>
      <div className="col-md-7 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
      <Typography>
      {univ.length}
      </Typography>
      </div>

    </div>


  </Col>
      
</Row>

           </Container>
    )
}
