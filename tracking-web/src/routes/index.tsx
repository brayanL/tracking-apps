import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignInSide from '../apps/login/components/SignInSide';
import Dashboard from '../apps/theme/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={SignInSide} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    );
}
