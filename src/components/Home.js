import React, { useState } from "react";

const Home = ({ user }) => {
  return <div><h1>Начало</h1> {JSON.stringify(user)}</div>;
};

export default Home;
