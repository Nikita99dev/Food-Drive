import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Welcome from "./components/Welcome/Welcome";
import PrivateRoute from "./components/Auth/PrivateRoute/PrivateRoute";
import LoginForm from "./components/Auth/loginForms/LoginForm";
import SignUp from "./components/Auth/signUpForms/SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../src/Redux/slices/rootReducer";
import SubmitSeccus from "./components/common/succes";
import Warning from "./components/common/warning";
import Profile from "./components/profile/profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loginInitialPending());
  }, []);

  const user = useSelector((state) => state.user);

  // const authenticated = Boolean(user?.user?.userId);
  // console.log(authenticated);

  return (
    <div className="m-2">
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/lk" condition={true} fallback="/login">
            <Profile />
          </PrivateRoute>
          <PrivateRoute
            path="/login"
            condition={true}
            fallback="/lk"
          >
            <LoginForm />
          </PrivateRoute>
          <PrivateRoute
            path="/signup"
            condition={true}
            fallback="/lk"
          >
            <SignUp user={user} />
          </PrivateRoute>
          <PrivateRoute
            path="/main"
            condition={true}
            fallback="/login"
          >
            <Main />
          </PrivateRoute>
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
  );
}

export default App;
