import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'antd';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from './components/Card';

import { post } from '../../utils/api';

const Profile = ({ user }) => {
  const [myitems, setMyitems] = useState([]);
  const {
    control, errors, handleSubmit, setValue,
  } = useForm();
  const onSubmit = async ({ tweet }) => {
    setValue('tweet', '');
    post(
      'Tweet',
      {
        tweet,
      },
      user.token,
    );
    setMyitems([
      ...myitems,
      { tweet, id: new Date().getTime().toString(), user_id: user.username },
    ]);
  };
  const { data, loading, error } = useQuery(gql`
    {
        Tweet(where: {wall: {user_id: {_eq: "${user.username}"}}}, order_by: {created_at: desc}, limit: 100) {
        id
        user_id
        created_at
        tweet
        comment {
          id
          comment
          user_id
        }
      }
      myWall: Tweet(order_by: {created_at: desc}, where: {user_id: {_eq: "${user.username}"}}, limit: 100) {
        id
        user_id
        created_at
        tweet
        comment {
          id
          comment
          user_id
        }
      }
      Follow(where: {user_id: {_eq: "${user.username}"}}) {
        following_id
      }
    }
  `);

  if (loading) return 'Зареждам...';
  if (error) return `Зареждам...${error}`;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={(
            <TextField
              id="outlined-basic"
              error={!!errors.tweet}
              label={
                errors.tweet
                  ? `какво мислите ${user.username}?`
                  : `какво мислите ${user.username}?`
              }
              variant="outlined"
              style={{ width: '80%' }}
            />
          )}
          defaultValue=""
          name="tweet"
          control={control}
          rules={{ required: true }}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: '20%', height: 56 }}
        >
          Чурулик!
        </Button>
      </form>
      {JSON.stringify()}
      {data.Tweet[0] && <h1>Стена</h1>}
      {myitems.map((item) => (
        <Card key={item.id} item={item} user={user} />
      ))}
      {[...data.Tweet, ...data.myWall]
        .sort((a, b) => a.id - b.id)
        .reverse()
        .map((item) => (
          <Card key={item.id} item={item} user={user} />
        ))}

    </>
  );
};

export default Profile;
