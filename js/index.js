/**
 * Created by lanwenshuyu on 2015/11/8.
 */
import React from "react";
import ReactDom from "react-dom";
import CommonStyle from "common.css";
import IndexStyle from '../css/index.css';

var Hello = React.createClass({
    render: function() {
        return <div className={IndexStyle.style}>
            <h2 className={CommonStyle.red}>Hello World</h2>
            <p></p>
        </div>;
    }
});


ReactDom.render(<Hello />, document.getElementById('container'));
