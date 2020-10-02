const isBrowser = typeof window !== 'undefined';

export const setUser = (user) => (window.localStorage.gatsbyUser = JSON.stringify(user));

const getUser = () => {
  if (window.localStorage.gatsbyUser) {
    const user = JSON.parse(window.localStorage.gatsbyUser);
    return user || {};
  }
  return {};
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();
  if (user) return !!user.username;
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = (callback) => {
  if (!isBrowser) return;
  setUser({});
  callback();
};
