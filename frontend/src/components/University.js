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

const useStyles = makeStyles({
  root: {
    marginTop:15,
    marginLeft:15,
    width:450
  },

});
export default function University(univ) {
  let history = useHistory();
 
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
           
           component="img"
           alt="University img"
           height="260"
           image="./assets/images/univ.jpg"
           title="Contemplative Reptile"
         />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {univ.univ.name}
            </Typography>
            <Typography  variant="body2" color="textSecondary" component="p">
          Description:  {univ.univ.description}
            </Typography> <Typography variant="body2" color="textSecondary" component="p">
            price :{univ.univ.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             location 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        
          <Button size="small" color="primary" onClick={()=>{history.push( `/university/${univ.univ._id}` )}}>
            Learn More
          </Button>
           
          <Button size="small" color="primary">
            Delete
          </Button>
           
          <Button size="small" color="primary">
            Update
          </Button>
        </CardActions>
      </Card>
    );
}
