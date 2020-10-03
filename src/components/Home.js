import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button, Table } from 'antd';
import TimeAgo from 'timeago-react';
import { post, put } from '../utils/api';

const Home = ({ user }) => {
  const [fields, setFields] = useState({ Items: [] });
  const {
    control, errors, handleSubmit, setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const newData = { ...data, vreme: new Date().getTime(), tip: `test-${user.username}` };
    setFields((prevState) => ({ Items: [newData, ...prevState.Items] }));
    await put(newData, user.token);
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
      setFields(response.data);
    }
    fetchData();
  }, [user]);
  return (
    <div>
      <h1>{user.username}</h1>

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

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
      <hr />

      <Table
        dataSource={fields.Items}
        columns={[
          {
            title: 'Task',
            dataIndex: 'task',
            key: 'task',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'date',
            dataIndex: 'vreme',
            key: 'date',
            render: (date) => (
              <div>
                <TimeAgo datetime={new Date(parseInt(date))} locale="bg_BG" />

              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Home;
