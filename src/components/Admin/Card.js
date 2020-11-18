import React from 'react';
import { Card, Avatar } from 'antd';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(frenchStrings);

const { Meta } = Card;
const Tweet = ({ item }) => (
  <Card style={{ marginBottom: 5 }}>
    <Meta
      avatar={<Avatar src="https://eu.ui-avatars.com/api/?name=a" />}
      title={(
        <>
          {`@${item.user_id} `}
          <small>dsad</small>
        </>
      )}
      description={item.caption}
    />
  </Card>
);
export default Tweet;
