import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar.component"
import HomePage from "./components/home-page.component";
import LoginUser from "./components/login-user.component";
import RegisterUser from "./components/register-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginUser} />
      <Route path="/register" component={RegisterUser} />
      </div>
    </Router>
  );
}

export default App;