import { FETCH_MOVIE_SEARCH } from '../action/types';

const initialState = {
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_SEARCH:
            return {...state, items: action.payload}
    
        default: 
            return state;
    }
}