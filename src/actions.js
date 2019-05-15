import {
    REQUEST_POPULAR_PENDING,
    REQUEST_POPULAR_SUCCESS,
    REQUEST_POPULAR_FAILED
} from './constant';

const api_key = '779cb993a7038477d49a9deabe16ed77'; 



// Get Popular movies fom api
export const requestPopular = () => (dispatch) => {

    console.log('Nothing');
    dispatch({type: REQUEST_POPULAR_PENDING});
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_POPULAR_SUCCESS, payload:data}))            
    .catch (error  => dispatch({type: REQUEST_POPULAR_FAILED, payload: error}))
}

console.log('Nothing');

import API from './utils/api';

// Get Popular movies fom api
export const requestPopular = () => async dispatch => {
   try {
       dispatch({type: REQUEST_POPULAR_PENDING});
       console.log(API);
       const response = await API.get('/movie/popular');
       console.log(response);
       await dispatch({type: REQUEST_POPULAR_SUCCESS, payload:response})            
   } catch (error) {
       dispatch({type: REQUEST_POPULAR_FAILED, payload: error})
   }

