import React, { Component } from "react";
import { POPULATE_DETAILS } from "../redux/store";
import { connect } from "react-redux";

export class home extends Component {
  submitHandler = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let surname = e.target.surname.value;
    let email = e.target.email.value;

    this.props.populate(name, surname, email);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="well well-sm">
              <form className="form-horizontal" onSubmit={this.submitHandler}>
                <fieldset>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Name</label>
                    <div className="col-md-9">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label">Surname</label>
                    <div className="col-md-9">
                      <input
                        id="surname"
                        name="surname"
                        type="text"
                        placeholder="Your surname"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label">Email</label>
                    <div className="col-md-9">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Your email"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12 text-right">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    populate: (name, surname, email) =>
      dispatch({ type: POPULATE_DETAILS, payload: { name, surname, email } }),
  };
};

export default connect(null, mapDispatchToProps)(home);
