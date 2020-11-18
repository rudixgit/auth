import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button, Modal } from 'antd';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useRecoilState } from 'recoil';
import { put } from '../../utils/api';
import { items, navigation, modal } from '../../utils/state';

const Admin = ({ user, edit }) => {
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

// ver 1
export default Admin;
