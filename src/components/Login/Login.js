import React, { useState } from "react";

import Error from "../Error";
import { Auth } from "aws-amplify";
import { useRecoilState } from "recoil";
import { loggedInUserData } from "../../utils/state";
import { Input } from "antd";

//

const Login = (props) => {
  const [user, setUser] = useRecoilState(loggedInUserData);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = async () => {
    try {
      await Auth.signIn(username, password);
      const user = await Auth.currentAuthenticatedUser();
      const userInfo = {
        ...user.attributes,
        username: user.username,
      };
      setUser(userInfo);

      localStorage.setItem("user", JSON.stringify(userInfo));
    } catch (err) {
      //this.setState({ error: err });
      console.log("error...: ", err);
      setError(err);
    }
  };
  return (
    <>
      {user.x && <Error errorMessage={error} />}
      {error && <Error errorMessage={error} />}
      {props.type === "compact" && (
        <>
          <Input
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Потребител"
            name="username"
            value={username}
            style={styles.InputCompact}
          />
          <Input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Парола"
            name="password"
            value={password}
            type="password"
            style={styles.InputCompact}
          />
          <div style={styles.buttonCompact} onClick={login}>
            <span style={styles.buttonCompact}>Вход</span>
          </div>
        </>
      )}
      {props.type === "full" && (
        <>
          <Input
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Потребител"
            name="username"
            value={username}
            style={styles.Input}
          />
          <Input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Парола"
            name="password"
            value={password}
            type="password"
            style={styles.Input}
          />
          <div style={styles.button} onClick={login}>
            <span style={styles.buttonText}>Вход</span>
          </div>
        </>
      )}
    </>
  );
};

const styles = {
  Input: {
    height: 40,
    margin: "10px 0px",
    padding: 7,
    width: "100%",
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
