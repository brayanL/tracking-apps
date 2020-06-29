import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { startLogin, failedLogin } from '../slices/loginSlice';

function* startLoginSaga({ payload }) {
    try {
        const { data } = yield axios.post(process.env.REACT_APP_LOGIN!, payload);
        console.log('data:', data);
    } catch (e) {
        console.log('Error:', e);
        yield put(failedLogin(e?.message));
    }
}

export function* watchStartLogin() {
    yield takeLatest(startLogin, startLoginSaga);
}
