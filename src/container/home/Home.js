import React, {Component} from 'react';
import {connect} from 'react-redux';

import './home.scss';
import {GET_HOME_SUCCESS} from './actionTypes';
import HomeView from '../../views/home/Home';

import {api} from 'data/services';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.fetchHomeData(props.prismicCtx, 'home');
    }

    render() {
        return <HomeView />
    }
}

const mapStateToProps = (state) => {
    return {
        homeData: state.home
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHomeData: (prismicCtx, customType) => dispatch(api.actions.GET_SINGLE(GET_HOME_SUCCESS, prismicCtx, customType))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
