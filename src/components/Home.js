import React, { useEffect, useState } from 'react';
import { query } from '../utils/api';

const Home = ({ user }) => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    async function fetchData() {
      const response = await query('/api/', user.token);

      setData(response.data);
    }
    fetchData();
  }, [user.token]);
  return (
    <div>
      <h1>Начало</h1>
      {JSON.stringify(user)}
      <hr />
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
