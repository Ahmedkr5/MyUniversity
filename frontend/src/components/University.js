import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { FadeTransform } from 'react-animation-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const useStyles = makeStyles({
  root: {
    marginTop:15,
    marginLeft:15,
    width:450
  },

});
export default function University(univ) {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose2 = () => {
    setOpen(false);}
  const handleClose = () => {
    setOpen(false);

    axios.delete('https://myuniversity-ahmed.herokuapp.com/universities/'+univ.univ._id)
    .then(alert(`university${univ.univ.name} deleted successfully`))
    .then(window.location.reload())
  };
    const classes = useStyles();
var image="https://myuniversity-ahmed.herokuapp.com/uploads/"+univ.univ.image
    return (


//confirm modal

<>
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        Are you sure you want to delete {univ.univ.name} University ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose2} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>





















    <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>

      <Card className={classes.root}>
        <CardActionArea onClick={()=>{history.push( `/university/${univ.univ._id}` )}}>
        <CardMedia
           
           component="img"
           alt="University img"
           height="260"
           image={image}
           title="Contemplative Reptile"
         />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {univ.univ.name}
            </Typography>
     
            <Typography variant="body2" color="textSecondary" component="p">
            <LocationOnIcon/>{univ.univ.Location}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{width:'100%',justifyContent:'space-between'}}>
        
          <Button size="small" color="primary" onClick={()=>{history.push( `/university/${univ.univ._id}` )}}>
            Learn More
          </Button>
           
          <Button size="small" color="primary" onClick={handleClickOpen} >
          <DeleteIcon color="secondary"/>
          </Button>
           
        
        </CardActions>
      </Card> </FadeTransform></>
    );
}
