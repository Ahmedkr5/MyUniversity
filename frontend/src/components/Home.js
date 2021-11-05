import React , {useState} from 'react'
import { Container } from '@material-ui/core'
import UniversityList from './UniversityList'
import {Loading} from './LoadingComponent'
import University from './University';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import {
    Button, Modal, ModalBody, ModalHeader, Label, Row, Col
} from "reactstrap";
import { Control, Form, Errors,actions } from 'react-redux-form';
import zIndex from '@material-ui/core/styles/zIndex';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
const useStyles = makeStyles((theme)=>({
    root: {
      marginTop:15,
      marginLeft:15,
      width:450,
      
    },
    popover: {
        pointerEvents: 'none',
      },
      paper: {
        padding: theme.spacing(1),
      },   }));
    const style = {
        margin: 0,
        top: 'auto',
        right: 30,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        zIndex:'1',
    };
export default function Home({univ,loading,err,postUniversity,resetAddUnivForm}) {
///validators
    const required = (val) => val && val.length; //value > 0
    const maxLength = (len) => (val) => !(val) || (val.length <= len);    
    const minLength = (len) => (val) => (val) && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    ///styles
    const classes = useStyles();
    ///modal
    const [toggleaddUniv,setToogleaddUniv]= useState(false)
    //popover 
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  ////
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
<>
        

        <Container maxWidth="xl" style={{justifyContent:'center'}}>
    <Modal isOpen={toggleaddUniv} toggle={()=>{setToogleaddUniv(!toggleaddUniv)}} >
                    <ModalHeader toggle={()=>{setToogleaddUniv(!toggleaddUniv)}}> Add University</ModalHeader>
                    <ModalBody>

                        <Form model='AddUniv' onSubmit={(values) => { postUniversity( values.name, values.program, values.location, values.length,values.price,values.description );setToogleaddUniv(!toggleaddUniv);resetAddUnivForm();}}>

                           
                           


                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>University Name </Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="University Name..."
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(4), maxLength: maxLength(20)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: ' Must be greater than 3 characters',
                                            maxLength: 'Must be 20 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="program" md={12}>Program </Label>
                                <Col md={12}>
                                    <Control.text model=".program" id="program" name="program"
                                        placeholder="University Program..."
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(4), maxLength: maxLength(20)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".program"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: ' Must be greater than 3 characters',
                                            maxLength: 'Must be 20 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="location" md={12}>Location </Label>
                                <Col md={12}>
                                    <Control.text model=".location" id="location" name="location"
                                        placeholder="location..."
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(4), maxLength: maxLength(20)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".location"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: ' Must be greater than 3 characters',
                                            maxLength: 'Must be 20 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="length" md={6} >Length(year)</Label>
                                <Col md={6}>
                                    <Control.select model=".length"
                                        className="form-control"
                                        name="length"
                                        id="length"
                                        validators={{
                                            required
                                        }}
                                    >
                                        <option>Please Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".length"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                                <Label htmlFor="price" md={6}>Price($) </Label>
                                <Col md={6}>
                                    <Control.text model=".price" id="price" name="price"
                                        placeholder="price..."
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".price"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                                    

                         
                            <Row className="form-group">
                                <Label htmlFor="description" md={12}>Description</Label>
                                <Col md={12}>
                                    <Control.textarea model=".description" id="description" name="description"
                                        rows="5"
                                        className="form-control"
                                        validators={{
                                            required,minLength: minLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".description"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: ' Must be greater than 15 characters',
                                        }}
                                    />
                                </Col>

                            </Row>

                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Add
                                    </Button>
                                </Col>
                            </Row>

                        </Form>

                    </ModalBody>
                </Modal>
                <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>Click to add Universities.</Typography>
      </Popover>

                <Fab color="primary" size='large' style={style} aria-label="add" 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                 aria-haspopup="true"
                 onMouseEnter={handlePopoverOpen}
                 onMouseLeave={handlePopoverClose}
                onClick={()=>{setToogleaddUniv(!toggleaddUniv)}}>
  <AddIcon />
</Fab>


<div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap'}}>

   
{univ.map((u)=>(<University key={u._id} univ={u}></University>))}  
  </div>
</Container></>
    )
}
}