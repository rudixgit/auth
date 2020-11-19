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
      Tweet(where: {}, order_by: { id: desc }, limit: 10) {
        user_id
        tweet
        created_at
      }
    }
  `);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.Tweet.map((item) => (
        <Card item={item} />
      ))}
    </>
  );
};

export default Welcome;
