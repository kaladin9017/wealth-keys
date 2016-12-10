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
  
</div>
</div>

  <div className="header-text">
    How Would You Like To Be Reminded?
  </div>

 <div className="reminder-selections">
<ul className="demo-list-control mdl-list">
  
  <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons  mdl-list__item-avatar">call</i>
      Call
    </span>
      <span className="mdl-list__item-secondary-action">
        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
          <input type="checkbox" id="list-switch-1" className="mdl-switch__input" />
        </label>
    </span>
  </li>

  <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons  mdl-list__item-avatar">chat</i>
      Text
    </span>
      <span className="mdl-list__item-secondary-action">
        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
          <input type="checkbox" id="list-switch-1" className="mdl-switch__input" />
        </label>
    </span>
  </li>

  <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons  mdl-list__item-avatar">email</i>
      Email
    </span>
      <span className="mdl-list__item-secondary-action">
        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
          <input type="checkbox" id="list-switch-1" className="mdl-switch__input" />
        </label>
    </span>
  </li>

</ul>
</div>

<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
  SET YOUR REMINDER(S)
</button>



      </div>
      )
  }
}

export default Confirmation;