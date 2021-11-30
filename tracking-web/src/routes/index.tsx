import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import SignInSide from '../apps/login/components/SignInSide';
import Dashboard from '../apps/dashboard/Dashboard';
import ReportAdvanced from '../apps/reports/components/ReportAdvanced';
import MainLayout from '../layouts/MainLayout';
import ReportDetail from '../apps/reports/components/ReportDetail';
import Users from "../apps/users/Users";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import AuthenticatedRoute from "../apps/login/components/AuthenticatedRoute";
import {UserRol} from "../types/User";

export default function Routes() {
  const login = useSelector((state: RootState) => state.login);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (login.isSuccess) {
      setIsAuthenticated(true);
    }
  }, [login.isSuccess]);

  return (
    <Switch>
      <Route exact path="/login" component={SignInSide}/>
      <AuthenticatedRoute
        path="/dashboard"
        component={Dashboard}
        layout={MainLayout}
        appProps={{isAuthenticated}}
      />
      <AuthenticatedRoute
        path="/reports/advanced"
        component={ReportAdvanced}
        layout={MainLayout}
        appProps={{isAuthenticated}}
      />
      <AuthenticatedRoute
        path="/reports/detail"
        component={ReportDetail}
        layout={MainLayout}
        appProps={{isAuthenticated}}
      />
      <AuthenticatedRoute
        path="/users"
        component={Users}
        layout={MainLayout}
        appProps={{isAuthenticated: isAuthenticated && login.role === UserRol[UserRol.ADMINISTRADOR]}}
      />
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/reports/advanced"/> : <SignInSide/>}
      </Route>
    </Switch>
  );
}
