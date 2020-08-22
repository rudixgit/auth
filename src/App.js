import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { useRecoilValue } from "recoil";
import Layout from "./components/layout";

import { Amplify, Auth } from "aws-amplify";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Forgot from "./components/Login/Forgot";
import { loggedInUserData } from "./utils/state";
Amplify.configure({
  aws_project_region: "eu-west-1",
  aws_cognito_identity_pool_id:
    "eu-west-1:06863165-5b56-4598-8e87-cc9ae2895f39",
  aws_cognito_region: "eu-west-1",
  aws_user_pools_id: "eu-west-1_sk5LfmU4g",
  aws_user_pools_web_client_id: "6d5of62ku9g4pcl2jpp0rcng67",
  oauth: {},
});

const App = () => {
  const user1 = useRecoilValue(loggedInUserData);
  const userStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { sub: null };
  const user = user1.sub ? user1 : userStorage;

  const logout = () => {
    alert(2);
    localStorage.setItem("user", JSON.stringify({ sub: null }));
    window.location.reload();
  };
  return (
    <Layout>
      <Router>
        <div>
          <nav>
            <ul>
              {user.sub === null ? (
                <>
                  <li>
                    <Link to="/app/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/app/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/app/forgot">Forgot Password</Link>
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() =>
                      Auth.signOut()
                        .then(logout())
                        .catch((err) => console.log("eror:", err))
                    }
                  >
                    Logout
                  </li>
                </>
              )}
            </ul>
          </nav>
          {JSON.stringify(user)}
          <Switch>
            <Route path="/app/login">
              {user.sub === null ? (
                <>
                  <h1>Login</h1>
                  <Login type="full" />
                </>
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/app/forgot">
              <Forgot />
            </Route>
            <Route path="/app/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    </Layout>
  );
};

export default App;
