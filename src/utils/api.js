import axios from 'axios';

const env1 = {
  development: {
    api: 'https://rudixlab.com/db/',
  },
  production: {
    api: 'https://rudixlab.com/db/',
  },
};
export const env = env1[process.env.NODE_ENV];
export const query = async (json) => {
  const result = await axios.post(
    env.api,
    JSON.stringify(json),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return new Promise((resolve) => {
    resolve(result);
  });
};
