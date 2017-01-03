import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import 'flexboxgrid';

import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import './index.scss';

import {Home} from 'views';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('root')
);