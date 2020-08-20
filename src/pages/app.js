import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Details from "../components/Details";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import Forgot from "../components/Login/Forgot";
import PrivateRoute from "../components/PrivateRoute";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Details} />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
      <Forgot path="/app/forgot" />
    </Router>
  </Layout>
);

export default App;
