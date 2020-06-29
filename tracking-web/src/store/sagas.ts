import { all, fork } from 'redux-saga/effects';
import loginSagas from '../apps/login/sagas';

export default function* rootSaga() {
    yield all(
        [
            ...Object.values(loginSagas),
        ].map(fork),
    );
}
