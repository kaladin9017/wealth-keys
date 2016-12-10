import React, { Component } from "react";
import './App.css';
import {Link} from 'react-router';
class Schedule extends Component {
  componentWillMount() {
    this.setState={day:1, month: 1, hour:1, minute:0}
  }
  addOrSubMonth (val) {

  }
  addOrSubDay (val) {}
  addOrSubHour (val) {}
  addOrSubMinute (val) {}
  render(){
    return(
      <div>

        <div className="schedule-container">

        <div className="month-box">
          
          <button onClick={this.addOrSubMonth.bind(this, '+')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">+</i>
          </button>

          <button onClick={this.addOrSubMonth.bind(this, '-')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">-</i>
          </button>
        
        </div>


        <div className="day-box">
          <div>{this.state}</div>
          <button onClick={this.addOrSubDay.bind(this, '+')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i className="material-icons">+</i>
            </button>

            <button onClick={this.addOrSubDay.bind(this, '-')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i className="material-icons">-</i>
            </button>

        </div>


        <div className="hour-box">
          <button onClick={this.addOrSubHour.bind(this, '+')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">+</i>
          </button>

          <button onClick={this.addOrSubHour.bind(this, '-')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">-</i>
          </button>

        </div>

        <div className="minute-box">
          <button onClick={this.addOrSubMinute.bind(this, '+')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">+</i>
          </button>

          <button onClick={this.addOrSubMinute.bind(this, '-')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">-</i>
          </button>

        </div>
        
        </div>
<div className="center-button">

        <Link to='confirm'>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Confirm Appointment
          </button>

        </Link>
      </div>
      </div>
    )

  }
}

export default Schedule;