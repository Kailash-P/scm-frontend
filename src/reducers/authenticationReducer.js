import * as actionTypes from '../actions/actionTypes';

export default function(state = [], action){
    const response = action.response;
    switch(action.type){
        case actionTypes.SIGN_IN_USER_SUCCESS:
            return { ...state, response };
        case actionTypes.SIGN_IN_USER_ERROR:
            return { ...state, response };
        default:
            return state;
    }
}