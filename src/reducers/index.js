import counterReducer from './counter';
import loggedReducer from './isLogged';
import claimsReducer from './claims';
import accountingReducer from './accounting'
import policiesReducer from './policies'
import {combineReducers} from 'redux';

// combineReducers primary function is to take a list of different reducers and wire them together into one cohesive unit. Used to create an instance of a Redux store. 

const allReducers = combineReducers({
   counter: counterReducer, 
   isLogged: loggedReducer,
   claims: claimsReducer, 
   account: accountingReducer, 
   policies: policiesReducer

})

export default allReducers;