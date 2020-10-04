import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useRecoilState } from 'recoil';
import { post } from '../utils/api';
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
