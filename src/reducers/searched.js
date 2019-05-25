import {
    REQUEST_SEARCHED_PENDING,
    REQUEST_SEARCHED_SUCCESS,
    REQUEST_SEARCHED_FAILED
} from '../constant';

const initialSearch = {
    isPending: false,
    searchedMovies: [],
    error: ''
}

export const requestSearched = (state=initialSearch, action={}) => {
    switch (action.type) {
        case REQUEST_SEARCHED_PENDING:
            return Object.assign({}, state, {isPending: true})
    
        default:
            break;
    }
}