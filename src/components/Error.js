import React from 'react';
import { Alert } from 'antd';

const translated = {
  UserNotFoundException: 'Потребителя не съществува',
  AuthError: 'Потребител или парола не могат да бъдат празни',
  CodeMismatchException: 'Невалиден код , моля опитайте отново',
  NotAuthorizedException: 'Потребител или парола невалидни',
  UsernameExistsException: 'Потребителя съществува',
  PasswordNotMatch: 'Паролите не съвпадат',
  InvalidParameterException: 'Паролата трябва да е поне 6 символа',
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
