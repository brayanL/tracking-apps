import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {parseJwt} from "../../../utils/CommonUtils";

export type Credentials = {
    username: string,
    password: string,
};

interface LoginData {
    token: string
}

interface LoginState {
    loading: boolean,
    data: { token: string },
    role: string,
    errorMessage: string,
    isSuccess: boolean
}

const initialState: LoginState = {
    loading: false,
    data: { token: '' },
    role: '',
    errorMessage: '',
    isSuccess: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        startLogin(state, action: PayloadAction<Credentials>) {
            state.loading = true;
        },
        successLogin(state, action: PayloadAction<LoginData>) {
            const { sub } = parseJwt(action.payload.token);
            const { role } = JSON.parse(sub);

            state.loading = false;
            state.data = action.payload;
            state.role = role;
            state.isSuccess = true;
        },
        failedLogin(state, action) {
            state.loading = false;
            state.errorMessage = action.payload;
            state.isSuccess = false;
        },
    },
});

export const { startLogin, successLogin, failedLogin } = loginSlice.actions;
export default loginSlice.reducer;
