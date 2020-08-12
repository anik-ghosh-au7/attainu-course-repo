import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import _ from 'lodash';
import { urls } from './config';

import routes from './route/index';
import { PublicRoute, PrivateRoute } from './RouteManagement';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={urls.home}>React Demo App</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={urls.home}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={urls.profile}>Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={urls.signIn}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={urls.signUp}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            {
              _.map(routes, (route, idx) => {
                return (
                  // let isAuth = !!localStorage.getItem('access_token'),
                  // // <Route key={idx} {...route}/>
                  // !route.isProtected ? <Route key={idx} {...route}/> : isAuth ? <Route key={idx} {...route}/> : <Redirect key={9} to='/sign-in' />
                  route.isProtected ?
                  <PrivateRoute key={idx} {...route} /> :
                  <PublicRoute key={idx} {...route} />
                )
              })
            }
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;