import {  Card, CardContent, Divider, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { Control, LocalForm, Errors } from 'react-redux-form';
/*import   {useDispatch,useSelector} from 'react-redux'
import { putUniversity } from "../Redux/actions/universityActions";*/
import {
    Button, Modal, ModalBody, ModalHeader, Label, Row, Col
} from "reactstrap";
export default function EditUniversity({univ,putUniversity}) {
    const required = (val) => val && val.length; //value > 0
    const maxLength = (len) => (val) => !(val) || (val.length <= len);    
    const minLength = (len) => (val) => (val) && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
/*
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(putUniversity(univ._id))
    }, [dispatch])



*/




  return (


    <Card style={{justifyContent:'center',marginTop:5}}>
    <LocalForm style={{width:'100%'}}
    onSubmit={(values) => { putUniversity(univ._id, values.name, values.program, values.location, values.length,values.price,values.description );}}
    >

                           
                           


    <Row className="form-group" >
    <Col md={2}></Col>
    <Col md={3}>      <Label htmlFor="name" style={{fontSize:20}} >University Name </Label></Col>
        <Col md={5  }>
            <Control.text model=".name" id="name" name="name"
                placeholder={univ.name}
               
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
 
    <Row className="form-group">   <Col md={2}></Col>
    <Col md={3}>      <Label htmlFor="program" style={{fontSize:20}} >Program </Label></Col>
        <Col md={5}>
            <Control.text model=".program" id="program" name="program"
                placeholder={univ.Program}
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
    <Col md={2}></Col>
    <Col md={3}>   <Label htmlFor="location" style={{fontSize:20}} >Location </Label></Col>
        <Col md={5}>
            <Control.text model=".location" id="location" name="location"
                placeholder={univ.Location}
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
    <Col md={2}></Col>
    <Col md={3}>      <Label htmlFor="length" style={{fontSize:20}} md={6} >Length(year)</Label></Col>
        <Col md={5}>
            <Control.select model=".length"
                className="form-control"
                name="length"
                id="length"
                defaultValue={univ.length}
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
        </Col> </Row><Row className="form-group">
        <Col md={2}></Col>
        <Col  md={3}>      <Label htmlFor="price" style={{fontSize:20}} md={6}>Price($) </Label></Col>
        <Col  md={5}>
            <Control.text model=".price" id="price" name="price"
                placeholder={univ.price}
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
    <Col md={2}></Col>
    <Col md={3}>
        <Label htmlFor="description"  style={{fontSize:20}}>Description</Label>
        </Col>
        <Col md={5}>
            <Control.textarea model=".description" id="description" name="description"
                rows="5"
                className="form-control"
                placeholder={univ.description}
             
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
<br/>
    <Row className="form-group">
    <Col md={5}></Col>
        <Col >
            <Button type="submit" color="primary" size="md">
                Update
            </Button>
        </Col>
    </Row>
    <br/>
</LocalForm></Card>
    );
}
