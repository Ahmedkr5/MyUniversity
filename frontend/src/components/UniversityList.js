import React from 'react'
import University from './University'
export default function UniversityList({univ}) {
    console.log(univ)
    return (
    
    
    
    <div style={{marginTop:200}}>

      {univ.map((u)=>(<University key={u._id} univ={u}></University>))}  
        </div>
    )
}
