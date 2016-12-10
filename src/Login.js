import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';
class Login extends Component {
  render() {
    return(
      <div id="login-container">

        
        
        <div className="form-center">

        <div className="login-text">LOGIN</div>

        <form action="#">
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" />
            <label className="mdl-textfield__label" for="sample3">Username</label>
          </div>
        </form>
  
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="password" />
            <label className="mdl-textfield__label" for="sample4">Password</label>
          </div>
        </form>
        </div>

        <div className="login-button-container">
          
          <div className="login-left-button">
           <Link to="welcome"> <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              LOGIN
            </button>
            </Link>
          </div>

          <div className="login-right-button">
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              HELP
            </button>
          </div>

        </div>

      </div>
    )
  }
}


export default Login;