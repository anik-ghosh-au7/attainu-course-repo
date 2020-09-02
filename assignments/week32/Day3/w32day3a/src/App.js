import React, { Component } from "react";
import styled from "styled-components";

export class App extends Component {
  state = {
    errors: [],
  };

  submitHandler = async (e) => {
    e.preventDefault();
    e.persist();
    await this.setState({ errors: [] });
    await this.checkName(e.target.name.value);
    await this.checkEmail(e.target.email.value);
    await this.checkPassword(e.target.password.value);
    await this.checkConfirmPassword(
      e.target.password.value,
      e.target.con_pass.value
    );
    if (this.state.errors.length === 0) {
      this.setState({ errors: [] });
      alert("form submission successfull");
    }
  };

  checkName = (input) => {
    if (input.length < 3) {
      this.setState({
        errors: [
          ...this.state.errors,
          "Name should be atleast three characters long",
        ],
      });
    }
  };

  checkEmail = (input) => {
    const reg_exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let match = reg_exp.test(input.toLowerCase());
    if (!match) {
      this.setState({
        errors: [...this.state.errors, "Provide a valid email id"],
      });
    }
  };

  checkPassword = (input) => {
    let upper_case = /[A-Z]/.test(input);
    let lower_case = /[a-z]/.test(input);
    let num = /[0-9]/.test(input);
    let special_char = /\W|_/.test(input);

    if (!upper_case) {
      this.setState({
        errors: [
          ...this.state.errors,
          "Password should contain a upper case character",
        ],
      });
    }
    if (!lower_case) {
      this.setState({
        errors: [
          ...this.state.errors,
          "Password should contain a lower case character",
        ],
      });
    }
    if (!num) {
      this.setState({
        errors: [...this.state.errors, "Password should contain a number"],
      });
    }
    if (!special_char) {
      this.setState({
        errors: [
          ...this.state.errors,
          "Password should contain a special character",
        ],
      });
    }
  };

  checkConfirmPassword = (pass_input, con_pass_input) => {
    if (pass_input !== con_pass_input) {
      this.setState({
        errors: [
          ...this.state.errors,
          "Password and confirm password values doesn't match",
        ],
      });
    }
  };

  render() {
    return (
      <Div>
        {this.state.errors.length > 0 ? (
          <div className="ui message">
            <div className="header">Errors</div>
            <ul className="list">
              {this.state.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>;
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
        <div className="ui inverted segment">
          <form className="ui inverted form" onSubmit={this.submitHandler}>
            <div className="one field">
              <div className="field">
                <label>Name</label>
                <input name="name" placeholder="Name" type="text" />
              </div>
              <div className="field">
                <label>Email</label>
                <input name="email" placeholder="Email" type="text" />
              </div>
              <div className="field">
                <label>Password</label>
                <input name="password" placeholder="Password" type="password" />
              </div>
              <div className="field">
                <label>Confirm Password</label>
                <input
                  name="con_pass"
                  placeholder="Confirm Password"
                  type="password"
                />
              </div>
            </div>
            <br />
            <button type="submit" className="ui submit button">
              Submit
            </button>
          </form>
        </div>
      </Div>
    );
  }
}

const Div = styled.div`
  width: 400px;
  height: 300px;
  margin-left: 40%;
  margin-top: 10%;
`;

export default App;
