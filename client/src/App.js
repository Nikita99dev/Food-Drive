import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Welcome from './components/Welcome/Welcome';
import Forms from './components/Forms/Forms';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import LoginForm from './components/Auth/loginForms/LoginForm';
import SignUp from './components/Auth/signUpForms/SignUpForm';
import { useDispatch } from 'react-redux';
import { initialUser } from './Redux/thunks/usersThunks';

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(initialUser())
  },[])


  return (
    <div className="m-2">
   <Router>
     <Header/>
       <Switch>
          <Route path="/form">
            <Forms />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/main">
            <Main />
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
