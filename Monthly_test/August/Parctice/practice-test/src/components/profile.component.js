import React, { Component } from 'react';
import { connect } from 'react-redux';
import googleKeys from '../config/google.json';
import { urls } from '../config';

export class profile extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
          window.gapi.client
            .init({
              clientId: googleKeys.web.client_id,
              scope: 'email profile openid',
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
            });
        });
      }

    clickedLogoutButton = async (e) => {
        e.preventDefault();
        console.log('logout button clicked');
        const { history } = this.props;
        localStorage.clear();
        if (this.auth.isSignedIn.get()) {
            this.auth.signOut();
        };
        history.push(urls.signIn);
      }
    render() {
        // data coming from redux store
        const { user_info } = this.props;
        console.log('userdata from redux store --> ', user_info);

        // let user_info = JSON.parse(localStorage.getItem('user_info'));
        let firstname, lastname, email, image;
        if (user_info) {
            firstname = user_info.firstname;
            lastname = user_info.lastname;
            email = user_info.email;
            image = user_info.image;
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="span4 well">
                        <div className="row">
                            <div className="span1" id="img"><img src={image} alt="" width="100px" height="100px"/></div>
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
    console.log(state);
    return {
        user_info: state
    }
};

export default connect(mapStateToProps)(profile);
