import React, { } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'antd';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from './components/Card';
import PublicFeed from './PublicFeed';
import { post } from '../../utils/api';

const Admin = ({ user }) => {
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
  };
  const { data, loading, error } = useQuery(gql`
    {
     Tweet(where: {wall: {follower_id: {_eq: "${user.username}"}}}, order_by: {created_at: desc}) {
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
   Follow(where: {follower_id: {_eq: "${user.username}"}}) {
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

      {data.Follow.length >= 1 ? (
        data.Tweet.map((item) => <Card item={item} user={user} />)
      ) : (
        <>
          <h1>Публични</h1>
          <PublicFeed user={user} showfollow />
        </>
      )}
    </>
  );
};

export default Admin;
