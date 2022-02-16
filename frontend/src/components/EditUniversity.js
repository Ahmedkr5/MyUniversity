import {  Card,  Divider, Grid, MenuItem, Select, TextField, Typography,TextareaAutosize } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";

import * as Yup from "yup";
import axios from "axios";

import {
    Button,  Label
} from "reactstrap";
export default function EditUniversity({univ}) {
  return (


    <Card style={{justifyContent:'center',marginTop:5}}>
            <Formik
              initialValues={{ name :univ.name ,Program :univ.Program , Location :univ.Location, price :univ.price, length :univ.length , description: univ.description }}
              validationSchema={Yup.object().shape({
              })}
              onSubmit={(values) => {
                axios.put('http://localhost:5000/universities/'+univ._id ,{
                name: values.name, 
                Program:values.Program,
                Location:values.Location,
                price:parseInt(values.price,10),
                length:values.length,
                description:values.description,
                 })
                 .then(alert("University updated Successfully"))
                 .then(
                  () => {
                    window.location.reload();
                  });
              }}
            >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              validateField,
            }) => (
         
              
              <Form onSubmit={handleSubmit} issubmitting={isSubmitting}
              validatefield={validateField}
              errors={errors}
              touched={touched}>
                
                <Grid container spacing={2} > 
                  
                <Grid item xs={12} md={3}>
                <Label/><Typography>University Name :</Typography>     
                </Grid>    
                
                <Grid item xs={12} md={9}>
                  <Field
                  style={{width:"100%"}}
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    initialValues=" "
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder=" "
                    component={TextField}
                    error={errors.name ? true : false}
                    helperText={errors.name && errors.name}
                  />
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>

                  <Grid item xs={12} md={3}>
                <Label/><Typography>Program :</Typography>     
                </Grid> 
                  
                  <Grid item xs={12} md={9}>
                  <Field
                  style={{width:"100%"}}
                    type="text"
                    name="Program"
                    id="Program"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Program}
                    placeholder=" "
                    component={TextField}
                    error={errors.Program ? true : false}
                    helperText={errors.Program && errors.Program}
                  />
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>


                  <Grid item xs={12} md={3}>
                <Label/><Typography>Location :</Typography>     
                </Grid>      
                

                  <Grid item xs={12} md={9}>

                  <Field
                  style={{width:"100%"}}
                    label="Location"
                    type="text"
                    name="Location"
                    id="Location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Location}
                    placeholder="Location"
                    component={TextField}
                    error={errors.Location ? true : false}
                    helperText={errors.Location && errors.Location}
                  />
                  
                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>

              
                  <Grid item xs={12} md={3}>
                <Label/><Typography>Price ($):</Typography>     
                </Grid>   
                
                  <Grid item xs={12} md={9}>
                     
                  <Field
                  style={{width:"100%"}}
                    
                    type="text"
                    name="price"
                    id="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    placeholder=" "
                    component={TextField}
                    error={errors.Price ? true : false}
                    helperText={errors.Price && errors.Price}
                  />


                  </Grid>

                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>

                  <Grid item xs={12} md={3}>
                <Label/><Typography>Length :</Typography>   
                  
                </Grid>   
                

                  <Grid item xs={12} md={9}>

<Select
  label="length"  name="length"  id="length"
            
            value={values.length}
            onChange={handleChange}
            onBlur={handleBlur}
           
          >
            <MenuItem value={'1'}  >1</MenuItem>
            <MenuItem value={'2'}  >2</MenuItem>
            <MenuItem value={'3'}  >3</MenuItem>
            <MenuItem value={'4'}  >4</MenuItem>
            <MenuItem value={'5'}  >5</MenuItem>
            <MenuItem value={'6'}  >6</MenuItem>
            <MenuItem value={'7'}  >7</MenuItem>
            <MenuItem value={'8'}  >8</MenuItem>
            <MenuItem value={'9'}  >9</MenuItem>
            <MenuItem value={'10'}  >10</MenuItem>
          </Select>







                  </Grid>
                  <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>
                  


                
             
                <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>
                <Grid item xs={12} md={3}>
                <Label/><Typography>Description :</Typography>     
                </Grid>   
                
                <Grid item xs={12} md={9}>

                  <Field
                  style={{width:"100%"}}
                  label="description"
                    type="textArea"
                    name="description"
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    placeholder=""
                    component={TextareaAutosize}
                    rows="3"
                    error={errors.description ? true : false}
                    helperText={errors.description && errors.description}
                  />
                                 </Grid>
                                 <Grid item xs={12} md={12}>
                <Divider variant='fullWidth'/>
                </Grid>

                <Button
          type="submit"
          variant="contained"
          color="primary"
         
        >
          Confirm
        </Button>
        </Grid>
              </Form>
            )}
              </Formik>

</Card>
    );
}
