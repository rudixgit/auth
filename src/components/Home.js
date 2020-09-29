import React from 'react';

const Home = ({ user }) => (
  <div>
    <h1>Начало</h1>

    {JSON.stringify(user)}
  </div>
);

export default Home;
