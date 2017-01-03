import * as home from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case home.GET_HOME_SUCCESS:
            console.log('STATE', state, 'ACTION', action);
            return Object.assig({}, state, action);
        default:
            return state;
    }
}