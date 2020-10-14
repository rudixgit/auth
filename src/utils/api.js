import axios from 'axios';

const env1 = {
  development: {
    api: 'https://db.rudixlab.com',
  },
  production: {
    api: 'https://db.rudixlab.com',
  },
};
export const env = env1[process.env.NODE_ENV];
export const get = async (id) => {
  const result = await axios.get(`${env.api}${id}`);
  return new Promise((resolve) => {
    resolve(result);
  });
};

export const heartbeat = async (token) => {
  const result = await axios.get(`${env.api}/heartbeat`, {
    headers: {
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
  const result = await axios.post(`${env.api}/db/test`, JSON.stringify(json), {
    headers: {
      accesstoken: token,
      'Content-Type': 'application/json',
    },
  });
  return new Promise((resolve) => {
    resolve(result);
  });
};
export const del = async (id, token) => {
  const result = await axios.get(`${env.api}/del${id}`, {
    headers: {
      accesstoken: token,
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
