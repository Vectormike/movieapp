// Combine reducers allows us combine all of the many reducers we might have
import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

// Reducer from -->

// Combines reducers and put it into a property to be exported
export default combineReducers({
    movies: moviesReducer
});
