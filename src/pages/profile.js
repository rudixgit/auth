import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import Forgot from "../components/Login/Forgot";
import Amplify from "aws-amplify";

Amplify.configure({
  aws_project_region: "eu-west-1",
  aws_cognito_identity_pool_id:
    "eu-west-1:06863165-5b56-4598-8e87-cc9ae2895f39",
  aws_cognito_region: "eu-west-1",
  aws_user_pools_id: "eu-west-1_sk5LfmU4g",
  aws_user_pools_web_client_id: "6d5of62ku9g4pcl2jpp0rcng67",
  oauth: {},
});

const IndexPage = () => (
  <Layout>
    <Login />
    <SignUp />
    <Forgot />
  </Layout>
);

export default IndexPage;
