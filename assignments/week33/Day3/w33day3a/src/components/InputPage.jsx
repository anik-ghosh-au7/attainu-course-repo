import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

export class InputPage extends Component {
  submitHandler = (e) => {
    const { history } = this.props;
    e.preventDefault();
    this.props.inputHandler(e.target.name.value, e.target.age.value);
    history.push("/page1");
  };
  render() {
    return (
      <>
        <h3>Input Page</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid name="name" label="Name" placeholder="name" />
            <Form.Input fluid name="age" label="Age" placeholder="age" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    );
  }
}

export default withRouter(InputPage);
