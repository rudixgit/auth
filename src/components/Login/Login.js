import React, { useState } from "react";

import Error from "../Error";
import { Auth } from "aws-amplify";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInUserData } from "../../utils/state";
//

const Login = (props) => {
  const [user, setUser] = useRecoilState(loggedInUserData);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleUpdate = (event) => {
    console.log(event.target.name);
    if (event.target.name === "username") {
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
    //.setState({ [event.target.name]: event.target.value });
  };

  const login = async () => {
    try {
      await Auth.signIn(username, password);
      const user = await Auth.currentAuthenticatedUser();
      const userInfo = {
        ...user.attributes,
        username: user.username,
      };
      setUser(userInfo);
      console.log(userInfo);
    } catch (err) {
      //this.setState({ error: err });
      console.log("error...: ", err);
      setError(err);
    }
  };
  return (
    <>
      {error && <Error errorMessage={error} />}
      {props.type === "compact" && (
        <>
          <input
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            name="username"
            value={username}
            style={styles.inputCompact}
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            name="password"
            value={password}
            type="password"
            style={styles.inputCompact}
          />
          <div style={styles.buttonCompact} onClick={login}>
            <span style={styles.buttonCompact}>Sign In</span>
          </div>
        </>
      )}
      {props.type === "full" && (
        <>
          <input
            onChange={handleUpdate}
            placeholder="Username"
            name="username"
            value={username}
            style={styles.input}
          />
          <input
            onChange={handleUpdate}
            placeholder="Password"
            name="password"
            value={password}
            type="password"
            style={styles.input}
          />
          <div style={styles.button} onClick={login}>
            <span style={styles.buttonText}>Sign In</span>
          </div>
        </>
      )}
    </>
  );
};

const styles = {
  input: {
    height: 40,
    margin: "10px 0px",
    padding: 7,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "rebeccapurple",
    padding: "15px 7px",
    cursor: "pointer",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
  },
};

export default Login;
