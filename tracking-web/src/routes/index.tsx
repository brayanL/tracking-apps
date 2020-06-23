import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignInSide from '../apps/login/SignInSide';

export default function Routes() {
    return (
        <Switch>
            <Route exact from="/login" component={SignInSide} />
        </Switch>
    );
}
