const env1 = {
  development: {
    api: 'https://rudixauth.herokuapp.com/test/',
  },
  production: {
    api: 'https://rudixauth.herokuapp.com/test/',
  },
};
export const env = env[process.env.NODE_ENV];
export const query = query => {};
