import React, { useState } from 'react';

import { Auth } from 'aws-amplify';
import { Input } from 'antd';
import Error from '../Error';
import Login from './Login';

const styles = {
  Input: {
    height: 40,
    margin: '10px 0px',
    padding: 7,
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'rebeccapurple',
    padding: '15px 7px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
};
const Forgot = () => {
  const [state, setState] = useState({
    username: '',
    error: '',
    validation: '',
    password: '',
    confirmPassword: '',
    stage: 0,
  });
  const login = async () => {
    try {
      await Auth.forgotPassword(state.username);

      setState({ ...state, stage: 1 });
    } catch (err) {
      setState({ ...state, error: err });
    }
  };
  const submitCode = () => {
    setState({ ...state, stage: 2 });
  };
  const changePassword = async () => {
    try {
      if (state.password === state.confirmPassword) {
        await Auth.forgotPasswordSubmit(
          state.username,
          state.validation,
          state.password
        );
        setState({ ...state, stage: 3, error: { name: 'Empty' } });
      } else {
        setState({
          ...state,
          error: { name: 'PasswordNotMatch', message: "Passwords don't Match" },
        });
      }
    } catch (err) {
      setState({ ...state, error: err });
    }
  };
  const handleUpdate = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <h1>Забвавена парола</h1>
      {state.error && <Error errorMessage={state.error} />}

      {state.stage === 0 && (
        <div style={styles.formContainer}>
          <Input
            onChange={handleUpdate}
            placeholder="Потребител"
            name="username"
            value={state.username}
            style={styles.Input}
          />

          <div
            role="button"
            tabIndex={0}
            style={styles.button}
            onClick={login}
            onKeyDown={login}
          >
            <span style={styles.buttonText}>Нататък</span>
          </div>
        </div>
      )}

      {state.stage === 1 && (
        <div>
          <div>Провери имейла си за потвърждаващ код</div>
          <Input
            onChange={handleUpdate}
            placeholder="потвърждаващ код"
            name="validation"
            value={state.validation}
            style={styles.Input}
          />
          <div
            role="button"
            tabIndex={0}
            style={styles.button}
            onClick={submitCode}
            onKeyDown={submitCode}
          >
            <span style={styles.buttonText}>ОК</span>
          </div>
        </div>
      )}

      {state.stage === 2 && (
        <div>
          <Input
            type="password"
            onChange={handleUpdate}
            placeholder="new password"
            name="password"
            value={state.password}
            style={styles.Input}
          />
          <br />
          <Input
            type="password"
            onChange={handleUpdate}
            placeholder="confirm password"
            name="confirmPassword"
            value={state.confirmPassword}
            style={styles.Input}
          />

          <div
            role="button"
            tabIndex={0}
            href="/"
            style={styles.button}
            onClick={changePassword}
            onKeyDown={changePassword}
          >
            <span style={styles.buttonText}>Смени</span>
          </div>
        </div>
      )}
      {state.stage === 3 && (
        <>
          <h1>Вход</h1>
          <Login type="full" />
        </>
      )}
    </div>
  );
};

export default Forgot;
