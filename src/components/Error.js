import React from 'react';
import { Alert } from 'antd';

const translated = {
  UserNotFoundException: 'Username does not exist',
  AuthError: 'Username or Password cannot be empty',
  CodeMismatchException: 'Invalid code, please try again',
  NotAuthorizedException: 'Username or Password invalid',
  UsernameExistsException: 'The user does not exist',
  PasswordNotMatch: 'Passwords do not match',
  InvalidParameterException: 'The password need to be at least 6 symbols',
  Empty: '',
};

const Error = (props) => (
  <div>
    {Object.entries(props).map(([err, val]) => (
      <Alert
        description={
          translated[val.name]
            ? translated[val.name]
            : `${val.message}-${val.name}`
        }
        type="error"
      />
    ))}
  </div>
);

export default Error;
