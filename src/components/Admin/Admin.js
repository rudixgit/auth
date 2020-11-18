import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button, Modal } from 'antd';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useRecoilState } from 'recoil';
import { post, put, del } from '../../utils/api';
import { items, navigation, modal } from '../../utils/state';

const Form = ({ user, edit }) => {
  const [fields, setFields] = useRecoilState(items);
  const [open, setOpen] = useRecoilState(modal);
  const {
    control, errors, handleSubmit, setValue,
  } = useForm();
  useEffect(() => {
    setValue('task', edit ? edit.task : '');
  }, [edit, open, setValue]);
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      vreme: edit ? edit.vreme : new Date().getTime(),
      tip: 'test1-',
    };
    if (!open) {
      setFields(
        fields.Items
          ? { Items: [newData, ...fields.Items] }
          : { Items: [newData] },
      );
    } else {
      const newProjects = fields.Items.map((p) => (p.vreme === edit.vreme ? newData : p));

      setFields({ Items: newProjects });
    }
    await put(newData, user.token);
    // await put({ ...newData, tip: 'test1-all' }, user.token);
    setValue('task', '');

    setOpen(false);
  };
  const { data, loading, error } = useQuery(gql`
   {
     Post(
       where: { wall: { follower_id: { _eq: "rudix" } } }
       order_by: { created_at: desc }
     ) {
       id
       created_at
       caption
       user_id
     }
   }
 `);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
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
        defaultValue=""
        name="task"
        control={control}
        rules={{ required: true }}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      {' '}
      {edit && <Button onClick={() => setOpen(false)}>Cancel</Button>}
    </form>
  );
};
const Admin = ({ user }) => {
  const [nav, setNav] = useRecoilState(navigation);
  const [fields, setFields] = useRecoilState(items);
  const [open, setOpen] = useRecoilState(modal);
  const [edited, setEdited] = useState({});
  useEffect(() => {
    setNav('admin');
  }, [setNav, nav]);
  useEffect(() => {
    async function fetchData() {
      const response = await post(
        {
          collection: 'test1-',
          descending: false,
        },
        user.token,
      );
      setFields(response.data);
    }
    fetchData();
  }, [user, setFields]);
  const deleteMe = async (obj) => {
    await del(obj, user.token);
    setFields({ Items: fields.Items.filter((e) => e.vreme !== obj.id) });
  };
  return (
    <div>
      <h1>{user.username}</h1>
      <Modal
        title={`Edit ${edited.task}`}
        visible={open}
        // onOk={this.handleOk}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <Form user={user} edit={edited} />
      </Modal>
      <Form user={user} />

    </div>
  );
};
// ver 1
export default Admin;
