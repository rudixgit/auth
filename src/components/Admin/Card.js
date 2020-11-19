import React from 'react';
import { Card, Avatar } from 'antd';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/bg';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(frenchStrings);

const { Meta } = Card;
const Tweet = ({ item }) => (
  <Card style={{ marginBottom: 5 }}>
    <Meta
      avatar={<Avatar src="//eu.ui-avatars.com/api/?name=a" />}
      title={(
        <>
          {`@${item.user_id} `}
          <small>
            <TimeAgo date={item.created_at} formatter={formatter} />
          </small>
        </>
      )}
      description={item.tweet}
    />
  </Card>
);
export default Tweet;
