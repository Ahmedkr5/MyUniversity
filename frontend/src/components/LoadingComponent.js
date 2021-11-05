import React from 'react';
import Loader from "react-loader-spinner";


export const Loading = () => {
    return (<div className="row" style={{justifyContent: 'center',alignItems:'center',height:600}}>
    
      
        <div className="col-2 " >
       
<Loader 

        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 
      />
            
      
</div>   
</div>   

 );
};