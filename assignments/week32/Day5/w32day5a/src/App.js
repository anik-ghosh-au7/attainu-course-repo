import React, { Component } from "react";
import { connect } from "react-redux";
import { Home, Profile } from "./components";

export class App extends Component {
  render() {
    return <>{this.props.detail_data.name ? <Profile /> : <Home />}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    detail_data: state,
  };
};

export default connect(mapStateToProps)(App);
