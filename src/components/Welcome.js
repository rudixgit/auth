import React, { useEffect } from 'react';

import { useRecoilState } from 'recoil';
// import { post } from '../utils/api';
import { navigation } from '../utils/state';

const Welcome = () => {
  const [nav, setNav] = useRecoilState(navigation);
  useEffect(() => {
    setNav('home');
  }, [setNav, nav]);
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Welcome;
