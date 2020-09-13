import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
      };
    }

    isLoading = () => {
      this.setState({ loading: false });
    };

    render() {
      return (
        <OriginalComponent
          loading={this.state.loading}
          isloading={this.isLoading}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
