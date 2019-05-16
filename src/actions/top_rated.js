import {
    REQUEST_TOP_PENDING,
    REQUEST_TOP_SUCCESS,
    REQUEST_TOP_FAILED
} from '../constant';

import API from '../api';


// Get Top Rated movies from api
export const requestTopRated = () => async dispatch => {
    try {
        dispatch({type: REQUEST_TOP_PENDING});
        const response = await API.get('/movie/top_rated');
        dispatch({
            type: REQUEST_TOP_SUCCESS,
            payload: response.data.results
        })
    } catch (error) {
        dispatch({
            type: REQUEST_TOP_FAILED,
            payload: error.data.status
        })
    }
}
