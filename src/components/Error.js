import React from "react";

const Error = (props) => (
  <div>
    {Object.entries(props).map(([err, val]) => (
      <div className="err" key={val.code}>
        {val.message}
      </div>
    ))}
  </div>
);

export default Error;
