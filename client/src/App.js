import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Welcome from './components/Welcome/Welcome';
import Forms from './components/Forms/Forms';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import LoginForm from './components/Auth/loginForms/LoginForm';
import SignUp from './components/Auth/signUpForms/SignUpForm';

function App() {
  return (
    <div className="m-2">
   <Router>
     <Header/>
       <Switch>
          <PrivateRoute path="/main">
            <Main />
          </PrivateRoute>
          <Route path="/form">
            <Forms />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
    </Router>
    </div>
   )
}

export default App;
