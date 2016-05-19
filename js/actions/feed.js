import {
    REQUEST_FEED,
    FAIL_NETWORK, 
    RECEVICE_FEED
} from './ActionTypes';

function requestFeed() {
    return {
        type: REQUEST_FEED
    }
}

function receviceFeed(feed) {
    return {
        type: RECEVICE_FEED,
        feed: feed
    }
}

function failNetwork() {
    return {
        type: FAIL_NETWORK
    }
}

function fetchUserFeed(user) {
    return dispatch => {
        dispatch(requestFeed());
        return fetch('https://api.github.com/users/wsw/received_events?t='+new Date())
        .then(response => response.json())
        .then(json => dispatch(receviceFeed(json)))
        .catch(error => dispatch(failNetwork()))    
    }
}

export {
    fetchUserFeed
}