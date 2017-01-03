import React, {Component} from 'react';
import {connect} from 'react-redux';

import {MetaHeader, HeaderNavigation} from 'ui';
import {api} from 'data/services';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.fetchHomeData();
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
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHomeData: () => dispatch(api.actions.GET())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);