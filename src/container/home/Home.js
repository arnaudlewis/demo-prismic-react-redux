import React, {Component} from 'react';
import {connect} from 'react-redux';

import {MetaHeader, HeaderNavigation} from 'ui';
import {api} from 'data/services';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.fetchHomeData('home');
    }

    render() {
        return(
            <div className="view--home">
                Home Component
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        homeData: state.home.response
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHomeData: (path) => dispatch(api.actions.GET(path))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);