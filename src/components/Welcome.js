import React, { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { postPublic } from '../utils/api';
import { navigation } from '../utils/state';

const Welcome = () => {
  const [nav, setNav] = useRecoilState(navigation);
  const [fields, setFields] = useState({ Items: [] });
  useEffect(() => {
    setNav('home');
  }, [setNav, nav]);

  useEffect(() => {
    async function fetchData() {
      const response = await postPublic(
        {
          collection: 'test-all',
          descending: false,
        },
      );
      setFields(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome, Guest</h1>
      <h2>Public Feed</h2>
      {fields.Items.map((item) => (<div key={item.vreme}>{item.task}</div>))}
    </div>
  );
};

export default Welcome;
