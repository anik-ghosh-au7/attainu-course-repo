import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import routes from "./routes";
import { InputPage } from "./components";

export class App extends Component {
  state = {
    activeItem: "Input Page",
    name: "",
    age: "",
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  inputHandler = (name, age) => {
    this.setState({
      name,
      age,
    });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <div>
          <Menu pointing secondary>
            <Menu.Item
              as={Link}
              name="Page 1"
              active={activeItem === "Page 1"}
              onClick={this.handleItemClick}
              to="/page1"
            />
            <Menu.Item
              as={Link}
              name="Page 2"
              active={activeItem === "Page 2"}
              onClick={this.handleItemClick}
              to="/page2"
            />
            <Menu.Item
              as={Link}
              name="Page 3"
              active={activeItem === "Page 3"}
              onClick={this.handleItemClick}
              to="/page3"
            />
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                name="Input Page"
                active={activeItem === "Input Page"}
                onClick={this.handleItemClick}
                to="/input"
              />
            </Menu.Menu>
          </Menu>
        </div>
        <Segment>
          <Switch>
            {routes.map((route, idx) => {
              const { component: Component, ...rest } = route;
              return (
                <Route {...rest} key={idx}>
                  <Component name={this.state.name} age={this.state.age} />
                </Route>
              );
            })}
            <Route path="/input">
              <InputPage
                inputHandler={(name, age) => this.inputHandler(name, age)}
              />
            </Route>
          </Switch>
          <Redirect exact to="/input" />
        </Segment>
      </Router>
    );
  }
}

export default App;
