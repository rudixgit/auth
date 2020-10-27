import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { get } from '../utils/api';
import { navigation } from '../utils/state';

const Welcome = ({ menu, lang }) => {
  const [nav, setNav] = useRecoilState(navigation);
  const [fields, setFields] = useState({ rows: [] });
  useEffect(() => {
    setNav(menu);
  }, [setNav, nav, menu]);

  useEffect(() => {
    async function fetchData() {
      const data = await get(
        '/test/_design/api/_view/feedAll?reduce=false&descending=true',
      );
      setFields(data.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="jumbotron">
        <h1>Looking for Job?</h1>
        <Button>Find Jobs</Button>
        <h1>Hiring?</h1>
        <Button>Post a Job</Button>
      </div>
      <div className="contentMain">
        {lang}
        {fields.rows.map((item) => (
          <div key={item.id}>
            <small>
              {`${item.value.username ? item.value.username : 'admin'} added: `}
            </small>
            {item.value.task}
          </div>
        ))}
      </div>
    </>
  );
};

export default Welcome;
