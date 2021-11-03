import * as actionTypes from '../constants/UniversityConstants';
import axios from 'axios';

export const getUniversities=()=> async (dispatch) =>{

    try{
        dispatch({type:actionTypes.GET_UNIVERSITIES_REQUEST})
    
        const  {data} = await axios.get('http://localhost:5000/universities/');

        dispatch({
            type:actionTypes.GET_UNIVERSITIES_SUCCESS,
            payload: data   
        })
    }
    catch (err){
dispatch({
    type:actionTypes.GET_UNIVERSITIES_FAIL,
    payload: err.response && err.response.data.message ?   err.response.data.message : err.message        
})

    }
}

export const getUniversityDetails=(id)=> async (dispatch) =>{

    try{
        dispatch({type:actionTypes.GET_UNIVERSITY_DETAILS_REQUEST})
    
        const  {data} = await axios.get(`http://localhost:5000/universities/${id}`);

        dispatch({
            type:actionTypes.GET_UNIVERSITY_DETAILS_SUCCESS,
            payload: data   
        })
    }
    catch (err){
dispatch({
    type:actionTypes.GET_UNIVERSITY_DETAILS_FAIL,
    payload: err.response && err.response.data.message ?   err.response.data.message : err.message        
})

    }
}


export const  removeUniversityDetails = () =>(dispatch) =>{
    dispatch({
        type:actionTypes.GET_UNIVERSITY_DETAILS_RESET,
    })
}


export  const addUniversity=(university) =>({
    type:actionTypes.ADD_UNIVERSITY,
    payload:university
})

export const postUniversity =(Universityname,Program,Location,Length,price,Description)=> (dispatch)=> {
 const newUniv={
    name: Universityname,
    Program: Program,
    Location: Location,
    length: Length,
    price:price,
    description:Description,
 }


    return  fetch( 'http://localhost:5000/universities/', {
        method: 'POST',
        body: JSON.stringify(newUniv),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {

        if (response.ok) {
            alert('University added successfuly!');
                return response;
                
        }
        else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
        }
    },
    
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then( response => response.json() )
    .then( response => dispatch(addUniversity(response)) )
    
    .catch(error => {
        console.log('Post university', error.message); 
        alert('University could not be posted\nError'+ error.message);
    });


}