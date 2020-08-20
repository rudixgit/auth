import React from "react";
import { navigate } from "@reach/router";
import { Auth } from "aws-amplify";
import Error from "../Error";
class Login extends React.Component {
  state = {
    username: "",
    error: "",
    validation: "",
    password: "",
    confirmPassword: "",
    stage: 0,
  };

  login = async () => {
    try {
      const x = await Auth.forgotPassword(this.state.username);
      console.log(x);
      this.setState({ stage: 1 });
    } catch (err) {
      this.setState({ error: err });
      console.log("error...: ", err);
    }
  };
  submitCode = () => {
    this.setState({ stage: 2 });
  };
  changePassword = async () => {
    try {
      if (this.state.password === this.state.confirmPassword) {
        await Auth.forgotPasswordSubmit(
          this.state.username,
          this.state.validation,
          this.state.password
        );
        navigate("/app/login");
      } else {
        this.setState({ error: { message: "Passwords don't Match" } });
      }
    } catch (err) {
      this.setState({ error: err });
      console.log("error...: ", err);
    }
  };
  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Forgot Password</h1>
        {this.state.error && <Error errorMessage={this.state.error} />}

        {this.state.stage === 0 && (
          <div style={styles.formContainer}>
            <input
              onChange={this.handleUpdate}
              placeholder="Username"
              name="username"
              value={this.state.username}
              style={styles.input}
            />

            <div
              role="button"
              tabIndex={0}
              style={styles.button}
              onClick={this.login}
              onKeyDown={this.login}
            >
              <span style={styles.buttonText}>Sign In</span>
            </div>
          </div>
        )}

        {this.state.stage === 1 && (
          <div>
            <div>check your email for validation code</div>
            <input
              onChange={this.handleUpdate}
              placeholder="validation code"
              name="validation"
              value={this.state.validation}
              style={styles.input}
            />
            <div
              role="button"
              tabIndex={0}
              style={styles.button}
              onClick={this.submitCode}
              onKeyDown={this.submitCode}
            >
              <span style={styles.buttonText}>Submit</span>
            </div>
          </div>
        )}

        {// password reset
        this.state.stage === 2 && (
          <div>
            <input
              type="password"
              onChange={this.handleUpdate}
              placeholder="new password"
              name="password"
              value={this.state.password}
              style={styles.input}
            />
            <br />
            <input
              type="password"
              onChange={this.handleUpdate}
              placeholder="confirm password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              style={styles.input}
            />

            <div
              role="button"
              tabIndex={0}
              style={styles.button}
              onClick={this.changePassword}
              onKeyDown={this.changePassword}
            >
              <span style={styles.buttonText}>Submit</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  input: {
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
