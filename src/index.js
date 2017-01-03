import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

import 'flexboxgrid';

import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import './index.scss';

import {Main} from 'views';
import {Home} from 'views';

import configureStore from 'data/store/configureStore';

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={Main}>
                <Route path="/" component={Home}/>
                {/*<Route path="/services/{SERVICE_SLUG}" component={Service}/>*/}
                {/*<Route path="/contact" component={Contact}/>*/}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);