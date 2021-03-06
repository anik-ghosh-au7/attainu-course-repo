import React, { Component } from 'react';
import { connect } from 'react-redux';

export class profile extends Component {

    clickedLogoutButton = async (e) => {
        e.preventDefault();
        console.log('logout button clicked');
        const { history } = this.props;
        localStorage.clear();
        history.push('/sign-in');
      }
    render() {
        // data coming from redux store
        const { login_data } = this.props;
        console.log('userdata from redux store --> ', login_data);

        let user_info = JSON.parse(localStorage.getItem('user_info'));
        let firstname, lastname, email;
        if (user_info) {
            firstname = user_info.firstname;
            lastname = user_info.lastname;
            email = user_info.email;
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="span4 well">
                        <div className="row">
                            <div className="span1" id="img"><img src="https://res.cloudinary.com/dtappasld/image/upload/v1593208750/s9otj8t6h5qpxfmmqylp.png" alt="" width="100px" height="100px"/></div>
                                <div className="span3">
                                    <p>{email}</p>
                                    <p><strong>{`${firstname} ${lastname}`}</strong></p>
                                    <span className=" badge badge-warning">8 messages</span> <span className=" badge badge-info">15 followers</span>
                                </div>
                                <button id="logout" type="button" className="btn btn-danger btn-block btn-sm" onClick={this.clickedLogoutButton}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    // console.log(state.login_data);
    return {
        login_data: state.login_data
    }
};

export default connect(mapStateToProps)(profile);
