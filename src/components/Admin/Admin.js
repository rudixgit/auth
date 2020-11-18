import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button, Modal } from 'antd';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { post } from '../../utils/api';

const Admin = ({ user, edit }) => {
  const {
    control, errors, handleSubmit, setValue,
  } = useForm();
  const onSubmit = async ({ caption }) => {
    setValue('caption', '');
    post(
      'Post',
      {
        caption,
        created_at: new Date().getTime().toString(),
      },
      user.token,
    );
  };
  const { data, loading, error } = useQuery(gql`
    {
     Post(where: {wall: {follower_id: {_eq: "${user.username}"}}}, order_by: {created_at: desc}) {
    id
    created_at
  }
  Follow(where: {following_id: {_eq: "${user.username}"}}, order_by: {id: desc}) {
    follower_id
  }
 
    }
  `);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={(
            <TextField
              id="outlined-basic"
              error={!!errors.caption}
              label={
                errors.caption
                  ? `какво мислите ${user.username}?`
                  : `какво мислите ${user.username}?`
              }
              variant="outlined"
              style={{ width: '80%' }}
            />
          )}
          defaultValue=""
          name="caption"
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
      {JSON.stringify(data)}
    </>
  );
};

export default Admin;
