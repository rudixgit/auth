import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useRecoilValue } from "recoil";
import Layout from "./components/layout";

import Amplify from "aws-amplify";
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
  const user = useRecoilValue(loggedInUserData);
  return (
    <Layout>
      {user.sub === null && <Login type="compact" />}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/app/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/app/forgot">Forgot Password</Link>
              </li>
            </ul>
          </nav>
          {JSON.stringify(user)}
          <Switch>
            <Route path="/app/login">
              <>
                <h1>Login</h1>
                <Login />
              </>
            </Route>
            <Route path="/app/forgot">
              <Forgot type="full" />
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
