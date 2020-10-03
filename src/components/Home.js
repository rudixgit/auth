import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { post } from '../utils/api';

const Home = ({ user }) => {
  const [data, setData] = useState({ Items: [] });
  const {
    control, register, errors, handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    async function fetchData() {
      const response = await post(
        {
          collection: 'newsbg',
          limit: 1,
          descending: false,
          fields: ['title', 'image', 'vreme'],
        },
        user.token,
      );
      setData(response.data);
    }
    fetchData();
  }, [user.token]);
  return (
    <div>
      <h1>Начало</h1>
      <h1>{user.sub}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={(
            <TextField
              id="outlined-basic"
              error={!!errors.task}
              label={errors.task ? 'task is required' : 'task'}
              variant="outlined"
              style={{ width: '100%' }}
            />
          )}
          name="task"
          control={control}
          defaultValue=""
          rules={{ required: true }}
        />
        <input type="submit" />
      </form>
      <hr />
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
