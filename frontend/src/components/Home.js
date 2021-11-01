import React from 'react'
import { Container } from '@material-ui/core'
import UniversityList from './UniversityList'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";
export default function Home() {

    let history = useHistory();
    function handleClick(event) {
        event.preventDefault();
       history.push('/home')
      }



    return (

        <Container maxWidth="xl">

<Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Link color="inherit" >
        Details
      </Link>
      
    </Breadcrumbs>


            <UniversityList></UniversityList>
            
</Container>
    )
}
