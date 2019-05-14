import {
    REQUEST_POPULAR_PENDING,
    REQUEST_POPULAR_SUCCESS,
    REQUEST_POPULAR_FAILED
} from './constant';

import API from './utils/api';

// Get Popular movies fom api
export const requestPopular = () => async dispatch => {
    try {
        dispatch({type: REQUEST_POPULAR_PENDING});
        console.log(API);
        const response = await API.get('/movie/popular?&language=en-US&page=1');
        console.log(response);
        await dispatch({type: REQUEST_POPULAR_SUCCESS, payload:response})            
    } catch (error) {
        dispatch({type: REQUEST_POPULAR_FAILED, payload: error})
    }

}