import React from "react";
import { Link } from "gatsby";
import { getCurrentUser } from "../utils/auth";

const Home = () => {
  const user = getCurrentUser();
  console.log("user:", user);
  return (
    <div>
      <h1>Profile Details</h1>
      {JSON.stringify(user)}
      <p>Email: {user.email}</p>

      <p>Username: {user.username}</p>
    </div>
  );
};

export default Home;
