import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getUniversitiesReducer,getUniversityDetailsReducer} from './reducers/UniversityReducer'
import { createForms } from 'react-redux-form';
import { InitialAddUniv } from './form';

const reducer = combineReducers({
   universities: getUniversitiesReducer,
   universityDetails: getUniversityDetailsReducer,
   ...createForms({
    AddUniv: InitialAddUniv
})
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