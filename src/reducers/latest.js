import {
    REQUEST_LATEST_PENDING,
    REQUEST_LATEST_SUCCESS,
    REQUEST_LATEST_FAILED 
} from '../constant';

// Initial State for Latest movies
const initialLatestState = {
    isPending: false,
    latest: [],
    error: ''
}

// Reducer -->
export const requestLatest = (state=initialLatestState, action={}) => {
    switch (action.type) {
        case REQUEST_LATEST_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_LATEST_SUCCESS:
            return Object.assign({}, state, {latest: action.payload, isPending: false})
        case REQUEST_LATEST_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}