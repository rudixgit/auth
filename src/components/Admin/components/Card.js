import React, { useState } from 'react';
import { Card, Comment, Input } from 'antd';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/bg';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { post } from '../../../utils/api';
// import Follow from './Follow';

const formatter = buildFormatter(frenchStrings);

const { Meta } = Card;
const { Search } = Input;

const Tweet = ({ item, user, showfollow }) => {
  const [comment, setComment] = useState(item.comment || []);
  const onSearch = (value) => {
    const val = { comment: value };
    setComment([...comment, val]);
    post(
      'Comment',
      {
        post_id: item.id,
        comment: value,
      },
      user.token,
    );
  };
  return (
    <>
      <Card style={{ marginBottom: 5 }}>
        <Meta
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
        {comment[0]
          && comment.map((comm) => (
            <Comment
              key={comm.id}
              author={comm.user_id}
              content={<p>{comm.comment}</p>}
            />
          ))}
        {user && (
          <Search
            placeholder="input search text"
            enterButton="Коментирай"
            size="medium"
            onSearch={onSearch}
          />
        )}
      </Card>
    </>
  );
};
export default Tweet;
