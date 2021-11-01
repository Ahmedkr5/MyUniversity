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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from "./SideDrawer";
import { alpha } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from "react-router-dom";
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
    marginLeft: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
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
      width: '20ch',
    },},
}));

export default  function Navbar() {
  const classes = useStyles();
  const theme= useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
  let history = useHistory();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMatch ?  <div ><div onClick={() => window.location.replace('/home')}><AccountBalanceIcon  onClick={() => window.location.replace('/home')} style={{ color:'white',fontSize: 25 }}/> 
        <Typography   variant="h5" className={classes.logo} >
         MyUniversity
        </Typography></div>
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
        <SideDrawer/> </div> : <>
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
     <Link to='/home' className={classes.link}>      Home
     </Link>  
          </div></>
}
      </Toolbar>
    </AppBar>
  );
}
