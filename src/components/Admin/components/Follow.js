import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useRecoilState } from 'recoil';
import { Button } from 'antd';

function CheckFollow({ user, username }) {
  const { data, loading, error } = useQuery(gql`
    {
      Follow(
        where: {
          follower_id: { _eq: "${user.username}" }
          _and: { following_id: { _eq: "${username}" } }
        }
      ) {
        id
      }
    }
  `);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

const Follow = ({ user, username }) => {
  // const [fields, setFields] = useState({ Items: [] });
  useEffect(() => {
    // ;
    async function check() {
      const check = await CheckFollow({ user, username });
    }
    check();
  }, []);

  return (
    <>
      <Button
        type="primary"
        shape="round"
        style={{ float: 'right' }}
      >
        Следвай!
      </Button>
    </>
  );
};

export default Follow;
