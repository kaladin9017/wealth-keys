import React, { Component } from "react";
import './App.css';

class Confirmation extends Component {
  render(){
    return(
      <div className="confirmation-container">

<div className="top-margin">
<div className="demo-card-wide mdl-card mdl-shadow--2dp">
  <div className="mdl-card__title">
    <h2 className="mdl-card__title-text">Welcome</h2>
  </div>
  <div className="mdl-card__supporting-text">
    You are scheduled to meet with Juan Perez on Monday, December 19th at 2:00pm. 
  </div>
  <div className="mdl-card__actions mdl-card--border">
    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect center">
      YOUR APPOINTMENT IS CONFIRMED
    </a>
  </div>
  <div className="mdl-card__menu">
    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i className="material-icons">share</i>
    </button>
  </div>
</div>
</div>

  <div className="header-text">
    How Would You Like To Be Reminded?
  </div>        
      </div>
      )
  }
}

export default Confirmation;