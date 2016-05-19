import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as FeedActions from '../actions/feed';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { fetchUserFeed, feed } = this.props;
        let list = feed.list.map(function (item, index) {
            return <li key={index}>{item.id}</li>;
        });
        let loading = feed.loading ? <div>loading</div> : <div></div>;
        let network = !feed.network ? <div>network fail</div> : <div></div>;
        return (
            <div>
                <button onClick={fetchUserFeed.bind(this)}>获取feed</button>
                {loading} {network}
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default connect((state) => {
    return { feed: state.feed};
}, (dispatch) => {
    return bindActionCreators(FeedActions, dispatch);
})(Feed);