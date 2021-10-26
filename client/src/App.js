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
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../src/Redux/slices/rootReducer'
import SubmitSeccus from './components/common/common';
import Warning from './components/common/warning';

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(actions.loginInitialPending())
  },[])

  const user = useSelector(state=>state.user)

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
            <SignUp user={user} />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/warning">
            <Warning />
          </Route>
          <Route path="/succes">
            <SubmitSeccus />
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
