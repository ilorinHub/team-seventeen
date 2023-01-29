import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from 'redux-logger';
import logger from 'redux-thunk';
import {Example} from '../reducers/exampleReducer'


//this code disable redux state management logger in production mode
let middelware = [];
if(process.env.NODE_ENV === 'development'){
    middelware = [...middelware, thunk, logger]
} else {
    middelware = [...middelware, thunk]
}

export const ConfigureStore = () => {
    const store = createStore(
       combineReducers({
        Example: Example
       }),
       applyMiddleware(...middelware)
       );
    return store;
}