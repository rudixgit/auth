import React from "react";
const translated = {
  UserNotFoundException: "Потребителя не съществува",
  AuthError: "Потребител или парола не могат да бъдат празни",
  CodeMismatchException: "Невалиден код , моля опитайте отново",
  NotAuthorizedException: "Потребител или парола невалидни",
};

const Error = (props) => (
  <div>
    {Object.entries(props).map(([err, val]) => (
      <div className="err" key={val.name}>
        {translated[val.name] ? translated[val.name] : val.message} {val.name}
      </div>
    ))}
  </div>
);

export default Error;
