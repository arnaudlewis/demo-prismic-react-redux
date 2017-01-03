import * as api from './actionTypes';

export const GET = (path) => {
    return {
        type: api.GET,
        path: path
    }
};