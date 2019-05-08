import { FETCH_MOVIE_SEARCH } from '../action/types';
import API from '../utils/api';

// Fetch movies when searched 
export const searchMovies =  (query, page) => async dispatch => {
    const response = await API.get('/search/movie', {
        params: {
            query, 
            page
        }
    });
    await dispatch({
        types: FETCH_MOVIE_SEARCH,
        payload: response
    })
}
