import React, {Component} from 'react';
import {connect} from 'react-redux';

import './home.scss';

import {api} from 'data/services';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.fetchHomeData('home');
    }

    render() {
        console.log('HOME DATA', this.props.homeData);
        if(
            !this.props.homeData ||
            (
                this.props.homeData &&
                !this.props.homeData.data
            )
        ) {return null;}

        return(
            <div className="view--home">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="column-text">
                                {this.props.homeData.data['home.description'].value.map((item, index) => {
                                    return (
                                        <p key={index}>{item.text}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 ">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        homeData: state.home
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHomeData: (path) => dispatch(api.actions.GET(path))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);