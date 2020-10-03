import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { post } from '../utils/api';

const Home = ({ user }) => {
  const [fields, setFields] = useState([]);
  const {
    control, errors, handleSubmit, setValue,
  } = useForm();

  const onSubmit = (data) => {
    setFields((prevState) => [data, ...prevState]);

    setValue('task', '');
    setValue('email', '');
  };

  useEffect(() => {
    async function fetchData() {
      const response = await post(
        {
          collection: `test-${user.username}`,
          limit: 10,
          descending: false,
        },
        user.token,
      );
      setFields(response.data.Items);
    }
    fetchData();
  }, [user]);
  return (
    <div>
      <h1>
        {user.username}
      </h1>
      {JSON.stringify(fields)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputwrapper">
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
        </div>
        <div className="inputwrapper">
          <Controller
            as={(
              <TextField
                id="outlined-basic"
                error={!!errors.email}
                label={errors.email ? 'email is not valiud' : 'email'}
                variant="outlined"
                style={{ width: '100%' }}
              />
            )}
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            }}
          />
        </div>
        <input type="submit" />
      </form>
      <hr />

    </div>
  );
};

export default Home;
