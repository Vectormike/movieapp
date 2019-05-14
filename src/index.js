import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './utils/serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore();


ReactDOM.render(
<Provider store ={store}>
    <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
