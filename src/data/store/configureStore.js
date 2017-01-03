import {createStore, applyMiddleware} from 'redux';

import rootReducer from 'container/rootReducer';
import {api} from 'data/services';

export default (initialState) => {
    console.log('CONFIGURE STORE', initialState);
    return createStore(rootReducer, initialState, applyMiddleware(api.reducer));
}