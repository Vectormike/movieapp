// Imported store -> Created store 
import { createStore, applyMiddleware } from 'redux';

// Brought reduced stuffs from reducer's folder
import rootReducer from '../reducers/index';

// Allows Middleware when dispatching
import thunk from 'redux-thunk';

// Initial state of the store
const initialState = {};


const middleware = [thunk];

// Created store
const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...thunk)
);

export default store;