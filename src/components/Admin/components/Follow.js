import React, { useState } from 'react';
// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';

import { Button } from 'antd';
import { post } from '../../../utils/api';

const Follow = ({ user, username }) => {
  const [active, setActive] = useState(false);
  const prez = () => {
    alert(username);
    setActive(!active);
    post(
      'Follow',
      {
        following_id: username,
      },
      user.token,
    );
  };
  return (
    <>
      <Button
        type="primary"
        shape="round"
        style={{ float: 'right' }}
        onClick={() => prez()}
        disabled={active}
      >
        Следвай!
      </Button>
    </>
  );
};
export default Follow;
