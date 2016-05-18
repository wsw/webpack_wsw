/**
 * Created by lanwenshuyu on 2015/11/8.
 */
import React from "react";
import ReactDom from "react-dom";
import CommonStyle from "common.css";
import IndexStyle from '../css/index.css';

import { Provider } from 'react-redux';
import configureStore from './store/configure';
import Counter from './container/Counter';
import Feed from './container/Feed';

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <Feed />
    </Provider>,
    document.getElementById('container')
)


// var Hello = React.createClass({
//     render: function() {
//         return <div className={IndexStyle.style}>
//             <h2 className={CommonStyle.red}>Hello World</h2>
//             <p></p>
//         </div>;
//     }
// });


//ReactDom.render(<Hello />, document.getElementById('container'));
