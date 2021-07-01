import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { useParams } from 'react-router-dom';

import Card from './Admin/components/Card';

const Tweet = ({ user }) => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(gql`
    {
      Tweet(where: { id: { _eq: "${id}" } }, order_by: { id: desc },limit:1) {
        tweet
        created_at
        id
        user_id
      }
    }
  `);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h1>{id}</h1>
      {data.Tweet[0] ? (
        data.Tweet.map((item) => <Card key={item.id} item={item} user={user} />)
      ) : (
        <>Потребителя не съществува</>
      )}
    </>
  );
};

export default Tweet;
