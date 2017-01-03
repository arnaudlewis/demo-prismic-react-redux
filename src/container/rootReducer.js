import {combineReducers} from 'redux';

import home from './home';

const reducers = {
    [home.constants.NAME]: home.reducer
};

export default combineReducers(reducers);