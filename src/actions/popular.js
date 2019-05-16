import {
    REQUEST_POPULAR_PENDING,
    REQUEST_POPULAR_SUCCESS,
    REQUEST_POPULAR_FAILED
} from '../constant';

import API from '../api';


// Get Popular movies fom api
export const requestPopular = () => async dispatch => {
    try {
        dispatch({type: REQUEST_POPULAR_PENDING});
        const response = await API.get('/movie/popular');
        dispatch({
            type: REQUEST_POPULAR_SUCCESS, 
            payload:response.data.results
         })            
     } catch (error) {
        dispatch({
            type: REQUEST_POPULAR_FAILED, 
            payload: error.response.status
         })
    }
}
 