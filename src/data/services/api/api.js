import Prismic from 'prismic.io';
import prismicConfig from 'config/prismic';

import * as api from './actionTypes';

const apiService = store => next => action => {
    next(action);
    console.log('INITIAL ACTION', action);
    switch(action.type) {
        case api.GET:
            Prismic.api(prismicConfig.apiEndpoint).then(function(api) {
                return api.query("");
            }).then(function(response) {
                console.log("Documents: ", response.results);
            }, function(err) {
                console.log("Something went wrong: ", err);
            });
            break;
        default:
            return store;
    }
};

export default apiService;