/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import loginReducer from '../apps/login/slices/loginSlice';

const appReducers = combineReducers({
    login: loginReducer,
});

/**
 * Reset all state of all reducers.
 * */
const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
        state = undefined;
    }
    return appReducers(state, action);
};

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
