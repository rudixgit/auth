import React from "react";

import Error from "../Error";
import { Auth } from "aws-amplify";
import { Input } from "antd";
 

class SignUp extends React.Component {
   state = {
      username: ``,
      password: ``,
      email: '',
      authCode: '',
      stage: 0,
      error: '',
   }

   handleUpdate = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      })
   }

   signUp = async () => {
      const { username, password, email } = this.state
      try {
         await Auth.signUp({
            username,
            password,
            attributes: { email },
         })
         this.setState({ stage: 1 })
      } catch (err) {
         this.setState({ error: err })
         console.log('error signing up...', err)
      }
   }

   confirmSignUp = async () => {
      const { username, authCode } = this.state
      try {
         await Auth.confirmSignUp(username, authCode)
         alert('Successfully signed up!')
         //navigate("/app/login");
      } catch (err) {
         this.setState({ error: err })
         console.log('error confirming signing up...', err)
      }
   }

   render() {
      return (
         <div>
            <h1>Регистрация</h1>
            {this.state.stage === 0 && (
               <div style={styles.formContainer}>
                  {this.state.error && (
                     <Error errorMessage={this.state.error} />
                  )}
                  <Input
                     onChange={this.handleUpdate}
                     placeholder="Потребител"
                     name="username"
                     value={this.state.username}
                     style={styles.Input}
                  />
                  <Input
                     onChange={this.handleUpdate}
                     placeholder="Парола"
                     name="password"
                     value={this.state.password}
                     type="password"
                     style={styles.Input}
                  />
                  <Input
                     onChange={this.handleUpdate}
                     placeholder="Email"
                     name="email"
                     value={this.state.email}
                     style={styles.Input}
                  />

                  <div style={styles.button} onClick={this.signUp}>
                     <span style={styles.buttonText}>Sign Up</span>
                  </div>
               </div>
            )}
            {this.state.stage === 1 && (
               <div style={styles.formContainer}>
                  {this.state.error && (
                     <Error errorMessage={this.state.error} />
                  )}
                  <Input
                     onChange={this.handleUpdate}
                     placeholder="Authorization Code"
                     name="authCode"
                     value={this.state.authCode}
                     style={styles.Input}
                  />
                  <div style={styles.button} onClick={this.confirmSignUp}>
                     <span style={styles.buttonText}>Confirm Sign Up</span>
                  </div>
               </div>
            )}
         </div>
      )
   }
}

const styles = {
  Input: {
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

export default SignUp;
