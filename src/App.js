import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import { Menu, Switch as Switch1, Button } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Amplify, Auth } from 'aws-amplify';
import Layout from './components/layout';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Forgot from './components/Login/Forgot';
import Welcome from './components/Welcome';
import Admin from './components/Admin/Admin';
import { loggedInUserData, navigation } from './utils/state';
import { heartbeat } from './utils/api';
import useLocalStorage from './utils/hooks';

Amplify.configure({
  aws_project_region: 'eu-west-1',
  aws_cognito_identity_pool_id:
    'eu-west-1:3f5f916d-2252-487f-99c0-7aa69115f973',
  aws_cognito_region: 'eu-west-1',
  aws_user_pools_id: 'eu-west-1_T6v05tjzh',
  aws_user_pools_web_client_id: 'eqlretnsetkj5p57bqtandjqa',
  oauth: {},
});

const App = () => {
  const [user, setUser] = useRecoilState(loggedInUserData);
  const nav = useRecoilValue(navigation);

  const [dark, setDark] = useLocalStorage('theme', false);
  const [lang, setLang] = useLocalStorage('lang', false);
  const l = lang ? 'en' : 'bg';
  const logout = async () => {
    await Auth.signOut();
    localStorage.setItem('user', JSON.stringify({}));
    setUser({});
  };

  useEffect(() => {
    const prevStorage = localStorage.getItem('user');
    const userStorage = prevStorage ? JSON.parse(prevStorage) : {};
    setUser(userStorage);
  }, [setUser]);

  useEffect(() => {
    const heartbeatGo = async () => {
      if (user.token) {
        const sess = await heartbeat(user.token);
        if (sess.data.name === 'TokenExpiredError') {
          const cognitoUser = await Auth.currentAuthenticatedUser();
          const currentSession = await Auth.currentSession();
          cognitoUser.refreshSession(
            currentSession.refreshToken,
            (err, session) => {
              const userSession = {
                ...user,
                token: session.accessToken.jwtToken,
              };
              setUser(userSession);
              localStorage.setItem('user', JSON.stringify(userSession));
            },
          );
          // localStorage.setItem('user', JSON.stringify(userInfo));
        }
      }
    };
    heartbeatGo();

    const interval = setInterval(async () => {
      heartbeatGo();
    }, 20000);
    return () => clearInterval(interval);
  }, [user, setUser]);

  const MenuItems = {
    bg: {
      Home: 'Начало',
      Login: 'Вход',
      SignUp: 'Регистрация',
      Forgot: 'Забравена Парола',
      Admin: 'Админ',
      Logout: 'Изход',
    },
    en: {
      Home: 'Home',
      Login: 'Login',
      SignUp: 'Sign Up',
      Forgot: 'Forgot Password',
      Admin: 'Admin',
      Logout: 'Logout',
    },
  };

  return (
    <Router>
      <div className={dark ? 'dark' : 'white'}>
        <div className="logo">
          <img src="/logo.png" alt="/logo.png" />
        </div>
        <Menu selectedKeys={[nav]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">{MenuItems[l].Home}</Link>
          </Menu.Item>
          {!user.username ? (
            <>
              <Menu.Item key="login">
                <Link to="/app/login">{MenuItems[l].Login}</Link>
              </Menu.Item>
              <Menu.Item key="signup">
                <Link to="/app/signup">{MenuItems[l].SignUp}</Link>
              </Menu.Item>
              <Menu.Item key="forgot">
                <Link to="/app/forgot">{MenuItems[l].Forgot}</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="admin">
                <Link to="/app/admin">{MenuItems[l].Admin}</Link>
              </Menu.Item>
              <Menu.Item key="logout">
                <Link to="/" onClick={() => logout()}>
                  {MenuItems[l].Logout}
                </Link>
              </Menu.Item>
            </>
          )}
        </Menu>
        <div className="switcher">
          <Switch1
            defaultChecked={dark}
            onChange={() => setDark(!dark)}
            style={{ marginRight: 5 }}
          />
          <Button type="primary" shape="circle" onClick={() => setLang(!lang)}>
            {lang ? 'BG' : 'EN'}
          </Button>
        </div>
        <Layout>
          <Switch>
            <Route path="/app/login">
              {!user.username ? (
                <>
                  <h1>{MenuItems[l].Login}</h1>
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
            <Route path="/app/feed">
              <Welcome menu="feed" />
            </Route>
            <Route path="/app/admin">
              {user.username && <Admin menu="admin" user={user} />}
            </Route>
            <Route path="/">
              <Welcome menu="home" lang={l} />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
