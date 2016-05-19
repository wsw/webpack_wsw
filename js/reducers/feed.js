import {
    REQUEST_FEED,
    RECEVICE_FEED,
    FAIL_NETWORK
} from '../actions/ActionTypes';

const initState = {
    list: [],
    loading: false,
    network: true
}

export default function feed(state=initState, action) {
    switch (action.type) {
        case REQUEST_FEED: 
            return Object.assign({}, state, {loading: true});
        case RECEVICE_FEED: 
            return Object.assign({}, state, {
                list: state.list.concat(action.feed),
                loading: false
            });
        case FAIL_NETWORK:
            return Object.assign({}, state, {network: false, loading: false});
        default:
            return state;
    }
}