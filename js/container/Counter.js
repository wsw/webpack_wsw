import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CounterActions from '../actions/counter';

class Counter extends React.Component {
    render() {
        const {
            increment, incrementIfOdd,
            incrementAsync, decrement,
            counter
        } = this.props;
        console.log(this.props)
        return (
          <p>
            Clicked: {counter} times
            {' '}
            <button onClick={increment}>+</button>
            {' '}
            <button onClick={decrement}>-</button>
            {' '}
            <button onClick={incrementIfOdd}>Increment if odd</button>
            {' '}
            <button onClick={() => incrementAsync()}>Increment async</button>
        </p> 
        );
    }
}

export default connect((state) => {
    return { counter: state.counter};
}, (dispatch) => {
    return bindActionCreators(CounterActions, dispatch);
})(Counter);