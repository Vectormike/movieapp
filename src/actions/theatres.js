import {
    REQUEST_THEATRES_PENDING,
    REQUEST_THEATRES_SUCCESS,
    REQUEST_THEATRES_FAILED
} from '../constant';

import API from '../api';

export const requestTheatres = () => async dispatch => {
    try {
        dispatch({type: REQUEST_THEATRES_PENDING});
        const response = await API.get('/movie/now_playing');
        dispatch({
            type: REQUEST_THEATRES_SUCCESS,
            payload: response.data.results
        })    
    } catch (error) {
        dispatch({
            type: REQUEST_THEATRES_FAILED,
            payload: error.response.status
        })
    }
}