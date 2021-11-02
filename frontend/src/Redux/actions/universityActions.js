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