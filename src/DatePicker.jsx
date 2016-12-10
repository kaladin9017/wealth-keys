import React, { Component } from 'react';

class DatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = {month: 1, day: 1, hour: 0, minute: 0}
  }
    addOrSubMonth (val) {
      if(val === "+") {
      return  this.setState.month === 12 ? this.setState.month = 1 : this.setState. month +=1
      }
      else {
      return  this.setState.month === 1 ? this.setState.month = 12 : this.setState. month -=1

      }

    }

    addOrSubDay (val) {
      if(val === "+") {
      return  this.setState.day === 31 ? this.setState.day = 1 : this.setState.day +=1
      }
      else {
      return  this.setState.day === 1 ? this.setState.day = 31 : this.setState.day -=1

      }
    }

    addOrSubHour(val) {
      if(val === "+") {
      return  this.setState.hour === 12 ? this.setState.hour = 1 : this.setState.hour +=1
      }
      else {
      return  this.setState.hour === 1 ? this.setState.hour = 12 : this.setState.hour -=1

      }
    }

    addOrSubMinute(val) {
      if(val === "+") {
      return  this.setState.minute === 60 ? this.setState.minute = 1 : this.setState.minute +=1
      }
      else {
      return  this.setState.minute === 1 ? this.setState.minute = 60 : this.setState.minute -=1

      }

  }

  render() {
    return (
      <div className="schedule-container">

      <div className="month-box">
        <div> {this.state.month} </div>
        <button onClick={this.addOrSubMonth.bind(this, '+')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">+</i>
        </button>

        <button onClick={this.addOrSubMonth.bind(this, '-')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">-</i>
        </button>

      </div>
      <div className="month-box">
        <div> {this.state.day} </div>
        <button onClick={this.addOrSubDay.bind(this, '+')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">+</i>
        </button>

        <button onClick={this.addOrSubDay.bind(this, '-')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">-</i>
        </button>

      </div>
      <div className="month-box">
        <div> {this.state.hour} </div>
        <button onClick={this.addOrSubHour.bind(this, '+')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">+</i>
        </button>

        <button onClick={this.addOrSubHour.bind(this, '-')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">-</i>
        </button>

      </div>
      <div className="month-box">
        <div> {this.state.minute} </div>
        <button onClick={this.addOrSubMinute.bind(this, '+')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">+</i>
        </button>

        <button onClick={this.addOrSubMinute.bind(this, '-')} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">-</i>
        </button>

      </div>


    </div>
    )
  }

}

export default DatePicker;
