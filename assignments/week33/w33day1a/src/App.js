import React, { Component } from "react";
import Input from "./Input";

export class App extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
  }

  componentDidMount() {
    // console.log(
    //   this.nameRef,
    //   this.emailRef,
    //   this.passwordRef,
    //   this.confirmPasswordRef
    // );
    this.nameRef.current.value = "Anik Ghosh";
    this.nameRef.current.disabled = true;
    this.emailRef.current.focus();
  }

  render() {
    return (
      <div>
        <Input
          ref={{
            name: this.nameRef,
            email: this.emailRef,
            password: this.passwordRef,
            confirm_password: this.confirmPasswordRef,
          }}
        />
      </div>
    );
  }
}

export default App;
