import React, { useEffect } from 'react';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const Tweet = () => (
  <Card
    style={{ marginBottom: 5 }}

  >
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
           }
      title="Card title"
      description="This is the description"
    />
  </Card>
);
export default Tweet;
