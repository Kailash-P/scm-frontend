import { takeLatest } from 'redux-saga/effects';
import { signInSaga } from './authenticationSaga';
import * as actionTypes from '../actions/actionTypes';

export default function* watchUserAuthentication() {
    yield takeLatest(actionTypes.SIGN_IN_USER, signInSaga);
}