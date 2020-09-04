import React, { Component } from "react";
import { connect } from "react-redux";
import { CLEAR_DETAILS } from "../redux/store";

export class profile extends Component {
  clickHandler = () => {
    this.props.return_back();
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name : {this.props.details.name}</h5>
                <p className="card-text">
                  Surname : {this.props.details.surname}
                </p>
                <p className="card-text">Email : {this.props.details.email}</p>
              </div>
              <div className="col-md-12 text-right">
                <button
                  className="btn btn-secondary btn-lg"
                  onClick={this.clickHandler}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    return_back: () => dispatch({ type: CLEAR_DETAILS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(profile);
