import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import 'flexboxgrid';

import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import './index.scss';

import {Main} from 'views';
import {Home} from 'views';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            {/*<Route path="/services/{SERVICE_SLUG}" component={Service}/>*/}
            {/*<Route path="/contact" component={Contact}/>*/}
        </Route>
    </Router>,
    document.getElementById('root')
);