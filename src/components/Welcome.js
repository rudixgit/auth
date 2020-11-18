import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useRecoilState } from 'recoil';

import { navigation } from '../utils/state';
import Card from './Admin/Card';

const Welcome = ({ user }) => {
  // const [fields, setFields] = useState({ Items: [] });

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
