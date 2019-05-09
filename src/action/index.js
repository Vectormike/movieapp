import { FETCH_MOVIE_SEARCH } from '../action/types';
import API from '../utils/api';

// Fetch movies when searched 
export const searchMovies =  (query, page) => async dispatch => {
    console.log('Fetching..');
    const response = await API.get('/search/movie', {
        params: {
            query, 
            page
        }
    }); 
    console.log(response);
    await dispatch({
        types: FETCH_MOVIE_SEARCH,
        payload: response
    })
}
