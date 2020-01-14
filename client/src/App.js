import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import LoginUser from "./components/login-user.component";
import RegisterUser from "./components/register-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/login" component={LoginUser} />
      <Route path="/register" component={RegisterUser} />
      </div>
    </Router>
  );
}

export default App;
