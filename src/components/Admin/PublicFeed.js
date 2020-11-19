import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from './Card';

const PublicFeed = () => {
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
export default PublicFeed;
