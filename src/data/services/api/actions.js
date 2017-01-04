import * as api from './actionTypes';

export const GET_BY_TYPE = (nextAction, prismicCtx, path) => {
    return {
        type: api.GET_BY_TYPE,
        nextAction,
        prismicCtx,
        path,
    }
};

export const GET_SINGLE = (nextAction, prismicCtx, customType) => {
    return {
        type: api.GET_SINGLE,
        nextAction,
        prismicCtx,
        customType,
    }
};
