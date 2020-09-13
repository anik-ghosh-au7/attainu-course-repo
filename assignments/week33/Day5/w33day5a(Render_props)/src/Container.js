import { Component } from "react";
import faker from "faker";

class Container extends Component {
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
  }

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  render() {
    return this.props.render(this.state.data);
  }
}

export default Container;
