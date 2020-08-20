import React from "react";

const Error = (props) => (
  <div>
    {Object.entries(props).map(([err, val]) => (
      <div className="err">{JSON.stringify(val)}</div>
    ))}
  </div>
);

export default Error;
