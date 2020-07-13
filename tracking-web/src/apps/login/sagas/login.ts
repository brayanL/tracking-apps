import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { startLogin, failedLogin, successLogin } from '../slices/loginSlice';

function* startLoginSaga({ payload }) {
    try {
        const response = yield axios.post(process.env.REACT_APP_LOGIN!, payload);
        yield put(successLogin({ token: response?.headers['authorization'] }));
    } catch (e) {
        yield put(failedLogin(e?.message));
    }
}

export function* watchStartLogin() {
    yield takeLatest(startLogin, startLoginSaga);
}
