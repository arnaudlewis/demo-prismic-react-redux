import * as home from './actionTypes';

export const getHomeSuccess = (response) => {
    return {
        type: home.GET_HOME_SUCCESS,
        response
    }
};