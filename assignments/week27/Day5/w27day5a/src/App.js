import React from 'react';
import './App.css';
import Button from './Button';
import Label from './Label.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      terms: false,
      inputs:[],
      submitted: false
    }
  }

  clickedSubmitButton = () => {
    console.log('submit button clicked');

    // this.setState(prevState => ({
    //   inputs: [...prevState.inputs, {name: this.state.name, email: this.state.email, password: this.state.password, terms: this.state.terms}]
    // }), () => console.log(this.state))

    this.setState({
      inputs: [...this.state.inputs, {name: this.state.name, email: this.state.email, password: this.state.password, terms: this.state.terms}],
      submitted: true
    },() => {
      console.log(this.state);
    });

  }

  inputChangeHandler = (e) => {
    console.log('change handler triggered');
    this.setState({
      [e.target.name]: e.target.value
    },() => {
      console.log(this.state);
    });
  };

  inputCheckboxHandler = (e) => {
    console.log('change handler triggered');
    this.setState({
      [e.target.name]: !this.state.terms
    },() => {
      console.log(this.state);
    });
  }
  render() {
    const { name, email, password, terms, submitted } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <Label/>
          {submitted?<h1>Form submitted!!!</h1>:<div>
            <div>
              <input name="name" type="text" value={name} onChange={this.inputChangeHandler} placeholder='Name'/>
            </div>
            <div>
              <input name="email" type="text" value={email} onChange={this.inputChangeHandler} placeholder='Email'/>
            </div>
            <div>
              <input name="password" type="password" value={password} onChange={this.inputChangeHandler} placeholder='password'/>
            </div>
            <div>
              <input name="terms" type="checkbox" value={terms} onChange={this.inputCheckboxHandler}/>
              <label>I agree to terms.</label>
            </div>
            <span>
            <Button title={'Submit'} clickHandler={this.clickedSubmitButton}/>
          </span>
          </div>}
        </header>
      </div>
    );
  }
}

export default App;
