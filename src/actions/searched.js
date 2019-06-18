import {
    REQUEST_SEARCHED_PENDING,
    REQUEST_SEARCHED_SUCCESS,
    REQUEST_SEARCHED_FAILED
} from '../constant';

import API from '../api';

export const requestSearched = (term) => async dispatch => {
    try {
        dispatch({type: REQUEST_SEARCHED_PENDING});
        const response = await API.get(`/search/movie?&language=en-US&query=${term}&page=1&include_adult=true`);
        dispatch({
            type: REQUEST_SEARCHED_SUCCESS,
            payload: response.data.results
        })
    } catch (error) {
        dispatch({
            type: REQUEST_SEARCHED_FAILED,
            payload: error.response
        }) 
    }
}