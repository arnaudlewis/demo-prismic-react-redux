import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import 'flexboxgrid';

import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import './index.scss';

import {Main} from 'views';
import Home from './container/home/Home.js';
import configureStore from 'data/store/configureStore';

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} withPrismic />
                {/*<Route path="/services/{SERVICE_SLUG}" component={Service}/>*/}
                {/*<Route path="/contact" component={Contact}/>*/}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
