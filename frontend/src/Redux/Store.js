import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getUniversitiesReducer,getUniversityDetailsReducer} from './reducers/UniversityReducer'


const reducer = combineReducers({
   universities: getUniversitiesReducer,
   universityDetails: getUniversityDetailsReducer
  });

  const middleware = [thunk];

  const initalState = {
 
  }
  const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  

  export default store;