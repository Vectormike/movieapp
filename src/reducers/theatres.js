import {
    REQUEST_THEATRES_PENDING,
    REQUEST_THEATRES_SUCCESS,
    REQUEST_THEATRES_FAILED
} from '../constant';

const initialTheatresState = {
    isPending: false,
    theatres: [],
    error: ''
}

export const requestTheatres = (state=initialTheatresState, action={}) => {
    switch (action.type) {
        case REQUEST_THEATRES_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_THEATRES_SUCCESS:
            return Object.assign({}, state, {theatres: action.payload, isPending: false})
        case REQUEST_THEATRES_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}