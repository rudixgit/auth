import React, { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { postPublic } from '../utils/api';
import { navigation } from '../utils/state';

const Welcome = ({ menu }) => {
  const [nav, setNav] = useRecoilState(navigation);
  const [fields, setFields] = useState({ Items: [] });
  useEffect(() => {
    setNav(menu);
  }, [setNav, nav, menu]);

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
      <h2>Public Feed</h2>
      {fields.Items.map((item) => (
        <div key={item.vreme}>

          <small>
            {`${item.username ? item.username : 'admin'} added: `}
          </small>
          {item.task}
        </div>
      ))}
    </div>
  );
};

export default Welcome;
