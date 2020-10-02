import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import { Menu, Switch as Switch1 } from 'antd';
import { useRecoilState } from 'recoil';
import { Amplify, Auth } from 'aws-amplify';
import Layout from './components/layout';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Forgot from './components/Login/Forgot';
import Home from './components/Home';
import Form from './components/Form';
import { loggedInUserData } from './utils/state';
import { get } from './utils/api';

Amplify.configure({
  aws_project_region: 'eu-west-1',
  aws_cognito_identity_pool_id:
    'eu-west-1:3f5f916d-2252-487f-99c0-7aa69115f973',
  aws_cognito_region: 'eu-west-1',
  aws_user_pools_id: 'eu-west-1_T6v05tjzh',
  aws_user_pools_web_client_id: 'eqlretnsetkj5p57bqtandjqa',
  oauth: {},
});

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const App = () => {
  const [selected, setSelected] = useLocalStorage('selected', 'home');
  const [dark, setDark] = useLocalStorage('theme', false);
  const [user, setUser] = useRecoilState(loggedInUserData);
  const [init, setInit] = useState(false);

  // const user = user1.sub ? user1 : userStorage;

  const logout = async () => {
    localStorage.setItem('user', JSON.stringify({ sub: null }));
    await Auth.signOut();
  };
  const handleClick = (e) => {
    setSelected(e.key);
  };

  useEffect(() => {
    const userStorage = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : { sub: null };
    setUser(userStorage);
    setInit(true);
  }, [setUser, init]);

  useEffect(() => {
    if (user.sub) {
      const interval = setInterval(async () => {
        // session();
        const sess = await get('/heartbeat', user.token);

        if (sess.data.name === 'TokenExpiredError') {
          // localStorage.setItem('user', JSON.stringify(userInfo));
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [user]);

  return (
    <Router>
      {init && (
        <div className={dark ? 'dark' : 'white'}>
          <Menu
            onClick={handleClick}
            selectedKeys={[selected]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Link to="/">Начало</Link>
            </Menu.Item>
            {user.sub === null ? (
              <>
                <Menu.Item key="login">
                  <Link to="/app/login">Вход</Link>
                </Menu.Item>
                <Menu.Item key="signup">
                  <Link to="/app/signup">Регистрация</Link>
                </Menu.Item>
                <Menu.Item key="forgot">
                  <Link to="/app/forgot">Забравена парола</Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="form">
                  <Link to="/app/form">Добави</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                  <a href="/" onClick={() => Auth.signOut().then(logout())}>
                    Изход
                  </a>
                </Menu.Item>
              </>
            )}
          </Menu>
          <div className="switcher">
            <Switch1 defaultChecked={dark} onChange={() => setDark(!dark)} />
          </div>
          <Layout>
            <Switch>
              <Route path="/app/login">
                {user.sub === null ? (
                  <>
                    <h1>Вход</h1>
                    <Login type="full" />
                  </>
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
              <Route path="/app/forgot">
                <Forgot />
              </Route>
              <Route path="/app/signup">
                <SignUp />
              </Route>
              <Route path="/app/form">
                <Form user={user} />
              </Route>
              <Route path="/">
                <Home user={user} />
              </Route>
            </Switch>
          </Layout>
        </div>
      )}
    </Router>
  );
};

export default App;
