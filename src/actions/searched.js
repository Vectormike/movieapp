import {
    REQUEST_SEARCHED_PENDING,
    REQUEST_SEARCHED_SUCCESS,
    REQUEST_SEARCHED_FAILED
} from '../constant';

import API from '../api';

export const requestSearched = () => async dispatch => {
    try {
        dispatch({type: REQUEST_SEARCHED_PENDING});
        const response = API.get(`/search/movie?query=${query}&page=1`);
        dispatch({
            type: REQUEST_SEARCHED_SUCCESS,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: REQUEST_SEARCHED_FAILED,
            payload: error.response
        }) 
    }
}