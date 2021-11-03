import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
  
} from "@material-ui/core";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import { alpha } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginRight: theme.spacing(5),
    display: "flex",
  },
 logo: {
    flexGrow:'1',
    cursor: "pointer",
    fontFamily:'Cursive',
    fontStyle:'italic',
    
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "white",
      fontWeight:'bold',
      borderBottom: "1px solid white",
    },

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight:15,
    marginLeft: 15,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '35px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },},
    search2: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight:5,
      marginLeft: 5,
      width: 'auto%',
      height:'fit-content',
      alignSelf :'center',
      [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },

}));

export default  function Navbar() {
  const classes = useStyles();
  const theme= useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMatch ?  <div style={{display:'flex',flexDirection:'row'}}><div style={{display:'flex',flexDirection:'row'}}>
       
        <Typography style={{display:'flex',flexDirection:'row',alignItems:'center'}}  variant="h6" className={classes.logo} >
        <AccountBalanceIcon  onClick={() => window.location.replace('/home')} style={{ color:'white',fontSize: 20 }}/>MyUniversity
        </Typography> 
        
        </div> <div className={classes.search2}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div><SideDrawer/>
       </div> : <>
        <AccountBalanceIcon  onClick={() => window.location.replace('/home')}   style={{ color:'white',fontSize:  40 }}/>
        <Typography  onClick={() => window.location.replace('/home')} variant="h4" className={classes.logo}>
            MyUniversity
        </Typography>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.navlinks}>
     <Link to='/home' className={classes.link}>Home
     </Link>  
          </div></>
}
      </Toolbar>
    </AppBar>
  );
}
