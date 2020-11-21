import React, { } from 'react';
// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';

import { Button } from 'antd';
// import { post } from '../../../utils/api';

const Follow = ({ user, username }) => (
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
export default Follow;
