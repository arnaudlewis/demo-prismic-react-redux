import Prismic from 'prismic.io';

import * as api from './actionTypes';

function getByType(next, action) {
    return action.prismicCtx.api.query(Prismic.Predicates.at("document.type", action.path))
    .then(function(response) {
        if(
            response &&
            response.results
        ) {
            next({
                type: action.nextAction,
                response: response.results
            });
        }
    })
    .catch((err) => console.log("Something went wrong: ", err))
}

function getSingle(next, action) {
    return action.prismicCtx.api.getSingle(action.customType)
    .then(function(doc) {
        next({
            type: action.nextAction,
            response: doc
        });
    })
    .catch((err) => console.log("Something went wrong: ", err))
}

const apiService = store => next => action => {
    next(action);
    console.log('INITIAL ACTION', action);

    switch(action.type) {
        case api.GET_BY_TYPE: return getByType(next, action)
        case api.GET_SINGLE: return getSingle(next, action)

        default:
            return store;
    }
};

export default apiService;
