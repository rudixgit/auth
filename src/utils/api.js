import axios from 'axios';

const env1 = {
  development: {
    api: 'http://localhost:3001',
  },
  production: {
    api: 'https://47ruk9bopl.execute-api.eu-central-1.amazonaws.com/dev',
  },
};
export const env = env1[process.env.NODE_ENV];
export const get = async (id, token) => {
  const result = await axios.get(`${env.api}${id}`, {
    headers: {
      test: 'emperror',
      accesstoken: token,
      'Content-Type': 'application/json',
    },
  });
  return new Promise((resolve) => {
    resolve(result);
  });
};
export const post = async (json, token) => {
  const result = await axios.post(`${env.api}/db`, JSON.stringify(json), {
    headers: {
      accesstoken: token,
      'Content-Type': 'application/json',
    },
  });
  return new Promise((resolve) => {
    resolve(result);
  });
};
export const postPublic = async (json) => {
  const result = await axios.post(`${env.api}/dbpublic`, JSON.stringify(json), {
    headers: {

      'Content-Type': 'application/json',
    },
  });
  return new Promise((resolve) => {
    resolve(result);
  });
};
export const put = async (json, token) => {
  const result = await axios.post(`${env.api}/insert`, JSON.stringify(json), {
    headers: {
      accesstoken: token,
      'Content-Type': 'application/json',
    },
  });
  return new Promise((resolve) => {
    resolve(result);
  });
};
export const del = async (json, token) => {
  const result = await axios.post(`${env.api}/del`, JSON.stringify(json), {
    headers: {
      accesstoken: token,
      'Content-Type': 'application/json',
    },
  });
  return new Promise((resolve) => {
    resolve(result);
  });
};
export const register = async (json) => {
  const result = await axios.post(`${env.api}/register`, JSON.stringify(json), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return new Promise((resolve) => {
    resolve(result);
  });
};
