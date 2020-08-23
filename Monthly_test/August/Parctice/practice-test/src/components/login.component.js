import React, { Component } from "react";
import { connect } from 'react-redux';
import { SAVE_USER } from '../reducers/loginReducer';
import googleKeys from '../config/google.json';

class Login extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: googleKeys.web.client_id,
                    // scope: 'email profile openid https://www.googleapis.com/auth/youtube',
                    scope: 'email profile openid',
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    // console.dir(this.auth.currentUser.get())
                    // this.onAuthChange(this.auth.isSignedIn.get());
                    // this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    };

    onSignInClick = async (e) => {
        e.preventDefault();
        await this.auth.signIn();
        const { history } = this.props;
        // console.log(this.auth.currentUser.get().getId());
        // console.log(this.auth.currentUser.get());
        let access_token = this.auth.currentUser.get().wc.access_token;
        let user_info = this.auth.currentUser.get().rt;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user_info', JSON.stringify({firstname: user_info.tV, lastname: user_info.uT, email: user_info.$t, image: user_info.TJ}));
        this.props.saveUser(user_info.tV, user_info.uT, user_info.$t, user_info.TJ);
        history.push('/profile');
    }

    
    render() {
        return (
            <form>
                <h3>Sign In</h3>
                <button onClick={this.onSignInClick} className="btn btn-primary btn-block">
                    Sign In with Google
                 </button>
            </form>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (firstname, lastname, email, image) => dispatch({ type: SAVE_USER, payload: { firstname, lastname, email, image } })
    }
};

export default connect(null, mapDispatchToProps)(Login);