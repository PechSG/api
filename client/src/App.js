import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
// import LoginUser from "./components/login-user.component";
// import RegisterUser from "./components/register-user.component";
import './App.scss';


// import { renderRoutes } from 'react-router-config';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const LoginUser = React.lazy(() => import('./components/login-user.component'));
const RegisterUser = React.lazy(() => import('./components/register-user.component'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
            <Route exact path="/logins" name="Login age" render={props => <LoginUser {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/registers" name="Register Page" render={props => <RegisterUser {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              <Route path="/" exact component={ExercisesList} />
            
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;