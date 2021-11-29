import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {
  const { layout: Layout } = rest;

  return (
    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated
          ? (
            <Layout>
              <C {...props} />
            </Layout>
          )
          : <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location.search}`}
          />}
    />
  );
}