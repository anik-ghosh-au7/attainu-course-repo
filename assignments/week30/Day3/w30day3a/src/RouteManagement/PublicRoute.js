import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { urls } from '../config';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuth = !!localStorage.getItem('access_token');
  return (
    <Route
      {...rest}
      render={(routeProps)=> {
        if (routeProps.location.pathname === urls.home) {
            return (
                <Component {...rest}  {...routeProps} />
            )
        } else {
            return(
            isAuth ?
                <Redirect to={urls.profile} /> :
                <Component {...rest}  {...routeProps} />
            );
        }
      }}
    />
  );
};

export default PublicRoute;