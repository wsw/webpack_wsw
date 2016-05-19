import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './ActionTypes';

function increment() {
    return {
        type: INCREMENT_COUNTER
    }
}

function incrementIfOdd() {
    return (dispatch, getState) => {
        const {counter} = getState();
        if (counter % 2) {
            return ;
        }
        dispatch(increment());
    }
}

function incrementAsync(delay=1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment())
        }, delay);
    }
}

function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}

export {
    increment,
    incrementAsync,
    incrementIfOdd,
    decrement
}