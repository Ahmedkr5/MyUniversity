import React from 'react'
import { Container } from '@material-ui/core'
import UniversityList from './UniversityList'
import {Loading} from './LoadingComponent'

export default function Home({univ,loading,err}) {



if (loading) {

    return (
        <Loading />
    );
}
else if ( err ) {
    
    return (
        <h4>{err}</h4>
    );
}
else{
    return (

        <Container maxWidth="xl" style={{backgroundColor:'#f6f6f6'}}>




          <UniversityList univ={univ}  ></UniversityList>
            
</Container>
    )
}
}