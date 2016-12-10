import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';
class Welcome extends Component {
  render() {
    return(
      <div className="welcome-container">

      <div className="reminder-selections">
        <img src={require("./images/dashboard.png")} />
      </div>

      <Link to='schedule'>
        <button className="solutions-buttons mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Are you thinking about starting something new?
        </button>
      </Link>
      <Link to='schedule'>
        <button className="solutions-buttons mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Are you planning any adventures?
        </button>
</Link>
<Link to='schedule'>
        <button className="solutions-buttons mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Do you have any career change concerns?
        </button>
</Link>
       <Link to='schedule'>
          <button className="solutions-buttons mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Do you have something else on your mind?
          </button>
      </Link>
      </div>
    )
  }
}

export default Welcome;