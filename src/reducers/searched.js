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
        case REQUEST_SEARCHED_SUCCESS:
            return Object.assign({}, state, {searchedMovies: action.payload})
        case REQUEST_SEARCHED_FAILED:
            return Object.assign({}, state, {error: action.payload})
        default:
            return state
    }
}