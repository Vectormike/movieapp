import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './containers/App';
import { requestPopular } from './reducers/popular';
import { requestTopRated } from './reducers/top_rated';
import { requestLatest } from './reducers/latest';
import { requestTheatres } from './reducers/theatres';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({requestPopular, requestTopRated, requestLatest, requestTheatres});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Router>
        <Provider store ={store}>
            <App/>
        </Provider>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
