import React, { Component } from "react";
import { httpRequest } from '../config';

export default class Login extends Component {constructor(props) {
    super(props);
    this.state = {
    email: '',
    password: '',
    error: ''
  };
};
inputChangeHandler = (e) => {
console.log('change handler triggered');
this.setState({
    [e.target.name]: e.target.value
},() => {
    console.log(this.state);
});
};

clickedSubmitButton = async (e) => {
    e.preventDefault();
    console.log('submit button clicked');
    const formData = this.state;
    console.log('form data --> ', formData);
    const { history } = this.props;
    try {
        let user = await httpRequest({
          method:'POST',
        //   url:'http://localhost:5000/login',
          url:'/login',
          data:formData
        });
        if(user.data.error){
            throw new Error(user.data.error)
        };
        console.log('response data --> ', user.data);
        localStorage.setItem('access_token',user.data.access_token);
        localStorage.setItem('user_info',JSON.stringify(user.data.user));
        history.push('/profile');
      } catch (err) {
        console.log('login error --> ', err.message);
        this.setState({error: err.message});
      }
  }
    render() {
        const { email, password, error } = this.state;
        return (
            <form>
                <h3>Sign In</h3>
                {error && <h6 id="error">{error}</h6>}
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" value={email} onChange={this.inputChangeHandler} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" value={password} onChange={this.inputChangeHandler} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.clickedSubmitButton}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/sign-in">password?</a>
                </p>
            </form>
        );
    }
}