import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useRecoilState, useRecoilValue } from 'recoil';

import { navigation, items } from '../utils/state';
import Card from './Admin/Card';

const Welcome = ({ user }) => {
  // const [fields, setFields] = useState({ Items: [] });
  const fields = useRecoilValue(items);
  const [nav, setNav] = useRecoilState(navigation);

  useEffect(() => {
    setNav('home');
  }, [setNav, nav]);

  const { data, loading, error } = useQuery(gql`
    {
      Post(where: {}, order_by: { created_at: desc }, limit: 10) {
        id
        created_at
        caption
        user_id
      }
    }
  `);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.Post.map((item) => (<Card item={item} />))}
    </>
  );
};

export default Welcome;
