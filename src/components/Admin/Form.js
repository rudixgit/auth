import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'antd';

import { useRecoilState } from 'recoil';
import { put } from '../../utils/api';
import { items, modal } from '../../utils/state';

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
      id: new Date().getTime.toString(),
      value: {
        ...data,
        _id: edit ? edit.vreme : new Date().getTime().toString(),
        type: 'feed',
      },
    };
    if (!open) {
      setFields(
        fields.rows
          ? { rows: [newData, ...fields.rows] }
          : { rows: [newData] },
      );
    } else {
      const newProjects = fields.rows.map((p) => (p.vreme === edit.vreme ? newData : p));

      setFields({ rows: newProjects });
    }
    await put(newData.value, user.token);
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

export default Form;
