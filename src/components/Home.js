import React, { useEffect, useState } from 'react';
import { post } from '../utils/api';

const Home = ({ user }) => {
  const [data, setData] = useState({ Items: [] });

  useEffect(() => {
    async function fetchData() {
      const response = await post(
        {
          collection: 'newsbg',
          limit: 1,
          descending: false,
          fields: ['title', 'image', 'vreme'],
        },
        user.token,
      );
      setData(response.data);
    }
    fetchData();
  }, [user.token]);
  return (
    <div>
      <h1>Начало</h1>
      <h1>{user.sub}</h1>
      <hr />
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
