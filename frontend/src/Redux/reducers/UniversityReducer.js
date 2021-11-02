import * as actionTypes from '../constants/UniversityConstants'


export const getUniversitiesReducer = (state = { universities: [] }, action) => {
    switch (action.type) {
      case actionTypes.GET_UNIVERSITIES_REQUEST:
        return {
          loading: true,
          universities: [],
        };
      case actionTypes.GET_UNIVERSITIES_SUCCESS:
        return {
            universities: action.payload,
          loading: false,
        };
      case actionTypes.GET_UNIVERSITIES_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const getUniversityDetailsReducer = (state={university:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_UNIVERSITY_DETAILS_REQUEST:
            return{
                loading:true,
            };
        case actionTypes.GET_UNIVERSITY_DETAILS_SUCCESS:
            return{
                loading:false,
                university:action.payload
            }
        case actionTypes.GET_UNIVERSITY_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload             
            }
            case actionTypes.GET_UNIVERSITY_DETAILS_RESET:
                return{
                    university:{}
                }
            default:
                return state;

    }

  }