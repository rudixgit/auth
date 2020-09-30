import axios from 'axios';

const env1 = {
  development: {
    api: 'https://47ruk9bopl.execute-api.eu-central-1.amazonaws.com/dev/',
  },
  production: {
    api: 'https://47ruk9bopl.execute-api.eu-central-1.amazonaws.com/dev/',
  },
};
export const env = env1[process.env.NODE_ENV];
export const query = async (json, token) => {
  const result = await axios.post(
    env.api,
    JSON.stringify(json),
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return new Promise((resolve) => {
    resolve(result);
  });
};
