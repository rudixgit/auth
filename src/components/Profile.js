import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useRecoilState } from 'recoil';
import {
  useParams,
} from 'react-router-dom';
import { navigation } from '../utils/state';
import Card from './Admin/components/Card';

const Profile = ({ user }) => {
  // const [fields, setFields] = useState({ Items: [] });
  const { id } = useParams();

  const [nav, setNav] = useRecoilState(navigation);

  useEffect(() => {
    setNav('dddd');
  }, [setNav, nav]);

  const { data, loading, error } = useQuery(gql`
    {
      Tweet(where: { user_id: { _eq: "${id}" } }, order_by: { id: desc },limit:100) {
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

export default Profile;
