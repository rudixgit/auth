import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from './components/Card';

const PublicFeed = ({ user }) => {
  const { data, loading, error } = useQuery(gql`
    {
      Tweet(where: {}, order_by: { id: desc }, limit: 100) {
        id
        user_id
        tweet
        created_at
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
        <Card key={item.id} item={item} user={user} showfollow />
      ))}
    </>
  );
};
export default PublicFeed;
