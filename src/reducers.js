import {
    REQUEST_POPULAR_PENDING,
    REQUEST_POPULAR_SUCCESS,
    REQUEST_POPULAR_FAILED
} from './constant';

// Initial state for Popular movies
const initialPopularState = {
    isPending: false,
    popular: [],
    error: ''
}

// Reducer fn for Popular movies
export const requestPopular = (state= initialPopularState, action={}) => {
    switch (action.type) {
        case REQUEST_POPULAR_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_POPULAR_SUCCESS:
            return Object.assign({}, state, {popular: action.payload, isPending:false})
        case REQUEST_POPULAR_FAILED:
            return Object.assign({}, state, {error: action.payload,isPending:false})
        default:
            return state;
    }
}