import {
    REQUEST_POPULAR_PENDING,
    REQUEST_POPULAR_SUCCESS,
    REQUEST_POPULAR_FAILED
} from '../constant';

const initialTopState = {
    isPending: false,
    top: [],
    error: ''
}

// Reducer for Top_Rated movies
export const requestTopRated = (state= initialTopState, action={}) => {
    switch (action.type) {
        case REQUEST_POPULAR_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_POPULAR_SUCCESS:
            return Object.assign({}, state, {top: action.payload, isPending: false});
        case REQUEST_POPULAR_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false})
        default:
            return state;
    }
}