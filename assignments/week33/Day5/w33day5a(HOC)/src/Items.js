import React, { Component } from "react";
import faker from "faker";
import UpdatedComponent from "./withLoader";
import loader from "./loader.gif";

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    let result = [];
    for (let i = 0; i < 100; i++) {
      let name = faker.name.findName();
      let email = faker.internet.email();
      result.push({
        name,
        email,
      });
      await this.sleep(30);
    }
    this.setState({
      data: [...this.state.data, ...result],
    });
    this.props.isloading();
  }

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  render() {
    // console.log(this.props);
    return !this.props.loading ? (
      <div>
        {this.state.data.map((element, index) => (
          <p key={index}>
            Name: {element.name}
            <br /> Email: {element.email}
          </p>
        ))}
      </div>
    ) : (
      <img src={loader} alt="loading data" />
    );
  }
}

export default UpdatedComponent(Items);
