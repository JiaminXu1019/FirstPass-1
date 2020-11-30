import React from 'react';
import fire from './fire.js';
import './Login.css'
import AlertDismissibleExample from './alert.js';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        error : false
    };

    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
  }

  signUp() {

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
        this.setState({
          error:false
        });
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
        this.setState({
          error:true
        });
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
        this.setState({
          error:false
        });
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());      
        this.setState({
          error:true
        });
      })
  }

  render() {
    return (
      <>
        { this.state.error && ( 
        <AlertDismissibleExample/>)
        }

      <div className = "login">Login To Save Classes</div>

      <div className = "container">
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
        
      
  
      </div>
     </>
    );

  }
}

export default Login;