import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { FindInPage } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import Overview from './Overview';
import EditUniversity from './EditUniversity';

const useStyles = makeStyles({
   BottomNavigation:{
  
    borderRadius:4,
 
   }
  });


export default function UniversityNav({univ,putUniversity}) {
    const classes = useStyles(); 
  const [value, setValue] = React.useState(0);
  const [state, setState] = useState("1");
  const [open, setOpen] = React.useState(false);

  

    return (<>
        <BottomNavigation
        className={classes.BottomNavigation}
                value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        
      >
       
        <BottomNavigationAction   onClick={() => {
                    if (open === false) {
                      setState("1");
                    }
                  }} label="Overview" icon={<FindInPage />} />
        <BottomNavigationAction    onClick={() => {
                    if (open === false) {
                      setState("2");
                    }
                  }}
        label="Update" icon={<EditIcon />} />
      
      </BottomNavigation>

{state == "1" ?  <Overview univ={univ}></Overview>
:<EditUniversity   univ={univ} putUniversity={putUniversity}></EditUniversity>}
</>

    )
}
