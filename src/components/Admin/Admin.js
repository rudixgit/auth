import React, { useEffect, useState } from 'react';

import { Button, Table, Modal } from 'antd';
import TimeAgo from 'timeago-react';
import { useRecoilState } from 'recoil';
import Form from './Form';
import { del, get } from '../../utils/api';
import { items, navigation, modal } from '../../utils/state';

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
      const data = await get(
        `/test/_design/api/_view/feed?limit=20&reduce=false&key="${user.username}"&descending=true`,
      );
      setFields(data.data);
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

      <Table
        onRow={(r) => ({
          onClick: () => setEdited(r),
        })}
        rowKey="id"
        dataSource={fields.rows}
        columns={[
          {
            title: 'Task',
            dataIndex: 'value',
            key: 'task',
            render: (value) => (value.task),
          },
          {
            title: 'date',
            dataIndex: 'id',
            key: 'date',
            render: (date) => (
              <div>
                <>
                  <TimeAgo datetime={new Date(parseInt(date))} locale="bg_BG" />
                </>
              </div>
            ),
          },
          {
            title: 'manage',
            dataIndex: 'vreme',
            key: 'date',
            render: () => <Button onClick={() => setOpen(true)}>Edit</Button>,
          },
          {
            title: 'manage',
            dataIndex: 'vreme',
            key: 'date',
            render: (vreme) => (
              <Button
                onClick={() => deleteMe({ collection: 'test1-', id: vreme })}
              >
                Delete
              </Button>
            ),
          },
        ]}
      />
    </div>
  );
};
// ver 1
export default Admin;
