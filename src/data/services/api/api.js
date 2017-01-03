// import Prismic from 'prismic.io';
// import prismicConfig from 'config/prismic';

import * as api from './actionTypes';

const apiService = store => next => action => {
    next(action);
    console.log('INITIAL ACTION', action);
    switch(action.type) {
        case api.GET:
            console.log('API SERVICE');
            // Prismic.api(prismicConfig.apiEndpoint).then(function(api) {
            //     return api.query(""); // An empty query will return all the documents
            // }).then(function(response) {
            //     console.log("Documents: ", response.results);
            // }, function(err) {
            //     console.log("Something went wrong: ", err);
            // });
            break;
        default:
            return store;
    }
};

export default apiService;