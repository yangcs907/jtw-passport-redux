import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthWebToken from './utils/setAuthWebToken.js';
import { setCurrentUser, logoutUser } from './Actions/authenticationActions.js';
import { Provider } from 'react-redux';
import store from './Store';
import PrivateRoutes from './components/privateroutes/PrivateRoutes.js';

import './App.css';

import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Info from './components/dashboard/Info.js';

if (localStorage.jwtToken) {
  // set auth token header
  setAuthWebToken(localStorage.jwtToken);
  // decode token and get user info and expiration
  const decodedToken = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decodedToken));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decodedToken.exp < currentTime) {
    store.dispatch(logoutUser());
    // redirect to login
    window.location.href = "/login";
  }
};

class App extends Component {
  render() {
    return (
      <Provider store= { store }>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path = "/" component = {Landing} />
              <Route exact path = "/register" component = {Register} />
              <Route exact path = "/login" component = {Login} />
              <Switch>
                <PrivateRoutes exact path = "/dashboard" component = {Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoutes exact path = "/info" component = {Info} />
              </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
};

export default App;
