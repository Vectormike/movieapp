import {
    REQUEST_LATEST_PENDING,
    REQUEST_LATEST_SUCCESS,
    REQUEST_LATEST_FAILED 
} from '../constant';

import API from '../api';

export const requestLatest = () => async dispatch => {
    try {
        dispatch({type: REQUEST_LATEST_PENDING});
        const response = await API.get('/movie/latest');
        dispatch({
            type: REQUEST_LATEST_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: REQUEST_LATEST_FAILED,
            payload: error.status_message
        })
    }
}