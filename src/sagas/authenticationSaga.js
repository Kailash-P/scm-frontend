import { put, call} from 'redux-saga/effects';
import { signIn } from '../admin/helper/user/userApiHelper';
import * as actionTypes from '../actions/actionTypes';

export function* signInSaga(payload){
    try {
        const response = yield call(signIn, payload.user);
        yield put({type: actionTypes.SIGN_IN_USER_SUCCESS, response});
    } catch (error) {
        yield put({type: actionTypes.SIGN_IN_USER_ERROR, error});
    }
}
