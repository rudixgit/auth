const fetch = require('node-fetch');
const insert = (json, table) => {
  fetch('http://3.250.107.57/v2/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': 'maximus',
    },
    body: JSON.stringify({
      type: 'insert',
      args: {
        table: { name: table, schema: 'public' },
        source: 'DB',
        objects: [
          {
            ...json,
            //user_id: res.locals.user.username,
          },
        ],
        returning: ['id'],
      },
    }),
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log(data);
    });
};

insert({ username: 'arpecop', adress: 'Bregalnitza 14' }, 'adresses_app');
