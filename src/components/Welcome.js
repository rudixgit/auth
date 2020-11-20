import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useRecoilState } from 'recoil';

import { navigation } from '../utils/state';
import Card from './Admin/components/Card';

const Welcome = () => {
  // const [fields, setFields] = useState({ Items: [] });

  const [nav, setNav] = useRecoilState(navigation);

  useEffect(() => {
    setNav('home');
  }, [setNav, nav]);

  const { data, loading, error } = useQuery(gql`
    {
      Tweet(order_by: { id: desc }, limit: 10) {
        user_id
        tweet
        created_at
        id
        comment {
          id
          comment
          user_id
        }
      }
    }
  `);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {data.Tweet.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
};

export default Welcome;
