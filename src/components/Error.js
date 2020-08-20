import React from "react";

const Error = (props) => (
  <div>
    {Object.entries(props).map(([err, val]) => (
      <div className="err">{val.message}</div>
    ))}
  </div>
);

export default Error;
