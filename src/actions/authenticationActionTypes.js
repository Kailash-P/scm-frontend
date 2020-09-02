import * as actionTypes from './actionTypes'

export const signInAction = (user) => {
    return {
        type: actionTypes.SIGN_IN_USER,
        user
    }
}