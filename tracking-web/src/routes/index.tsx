import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignInSide from '../apps/login/components/SignInSide';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={SignInSide} />
        </Switch>
    );
}
