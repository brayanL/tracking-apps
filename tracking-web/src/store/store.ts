/* eslint-disable no-undef,consistent-return,global-require */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const localStorageMiddleware = ({ getState }) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(
        getState(),
    ));
    return result;
};

const reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {
        // @ts-ignore
        return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
    }
};

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, localStorageMiddleware],
    preloadedState: reHydrateStore(),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
        const newRootReducer = require('./reducers').default;
        store.replaceReducer(newRootReducer);
    });
}

// run saga
sagaMiddleware.run(rootSaga);

export default store;
