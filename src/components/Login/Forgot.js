import React from "react";

import { Auth } from "aws-amplify";
import Error from "../Error";
import { Input } from "antd";
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
        //navigate("/app/login");
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
        <h1>Забвавена парола</h1>
        {this.state.error && <Error errorMessage={this.state.error} />}

        {this.state.stage === 0 && (
          <div style={styles.formContainer}>
            <Input
              onChange={this.handleUpdate}
              placeholder="Потребител"
              name="username"
              value={this.state.username}
              style={styles.Input}
            />

            <div
              role="button"
              tabIndex={0}
              style={styles.button}
              onClick={this.login}
              onKeyDown={this.login}
            >
              <span style={styles.buttonText}>Нататък</span>
            </div>
          </div>
        )}

        {this.state.stage === 1 && (
          <div>
            <div>Провери имейла си за потвърждаващ код</div>
            <Input
              onChange={this.handleUpdate}
              placeholder="потвърждаващ код"
              name="validation"
              value={this.state.validation}
              style={styles.Input}
            />
            <div
              role="button"
              tabIndex={0}
              style={styles.button}
              onClick={this.submitCode}
              onKeyDown={this.submitCode}
            >
              <span style={styles.buttonText}>ОК</span>
            </div>
          </div>
        )}

        {
          // password reset
          this.state.stage === 2 && (
            <div>
              <Input
                type="password"
                onChange={this.handleUpdate}
                placeholder="new password"
                name="password"
                value={this.state.password}
                style={styles.Input}
              />
              <br />
              <Input
                type="password"
                onChange={this.handleUpdate}
                placeholder="confirm password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                style={styles.Input}
              />

              <a
                role="button"
                tabIndex={0}
                href="/"
                style={styles.button}
                onClick={this.changePassword}
                onKeyDown={this.changePassword}
              >
                <span style={styles.buttonText}>Смени</span>
              </a>
            </div>
          )
        }
      </div>
    );
  }
}

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
