import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Credentials = {
    username: string,
    password: string,
};

interface LoginData {
    token: string
}

interface LoginState {
    loading: boolean,
    data: object,
    isError: boolean
}

const initialState: LoginState = {
    loading: false,
    data: {},
    isError: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        startLogin(state, action: PayloadAction<Credentials>) {
            state.loading = true;
        },
        successLogin(state, action: PayloadAction<LoginData>) {
            state.loading = false;
            state.data = action.payload;
            state.isError = false;
        },
        failedLogin(state, action) {
            state.loading = false;
            state.data = action.payload;
            state.isError = true;
        },
    },
});

export const { startLogin, successLogin, failedLogin } = loginSlice.actions;
export default loginSlice.reducer;
