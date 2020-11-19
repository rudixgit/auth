import React, { } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'antd';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from './Card';
import { post } from '../../utils/api';

const Admin = ({ user }) => {
  console.log(user);
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
  const { data, loading } = useQuery(gql`
    {
     Post(where: {wall: {follower_id: {_eq: "${user.username}"}}}, order_by: {created_at: desc}) {
    id
    user_id
    created_at
    caption
  }
  
    }
  `);

  if (loading) return 'Зареждам...';

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

      {data.Post[1] ? (
        <>
          <h1>Следвани</h1>
          {}
        </>
      ) : (
        <>
          <h1>Публични Постове</h1>

        </>
      )}
      { data.Post.map((item) => (<Card item={item} />)) }
    </>
  );
};

export default Admin;
