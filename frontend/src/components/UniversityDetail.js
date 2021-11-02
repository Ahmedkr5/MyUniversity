import React from 'react'
import { Container } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
export default function UniversityDetail() {


    let history = useHistory();
    function handleClick(event) {
        event.preventDefault();
       history.push('/home')
      }
    return (


        <Container maxWidth="xl" style={{backgroundColor:'#f6f6f6'}}>

<Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Typography color="textPrimary">Details</Typography>
      
    </Breadcrumbs>

<Card>

  aaaa
</Card>




</Container>
    )
}
