/**
 * Created by lanwenshuyu on 2015/11/8.
 */
import React from "react";
import ReactDom from "react-dom";
require('../css/index.css');

var Hello = React.createClass({
    render: function() {
        return <div className="style">
            <h2>Hello World</h2>
            <p></p>
        </div>;
    }
});


ReactDom.render(<Hello />, document.getElementById('container'));
